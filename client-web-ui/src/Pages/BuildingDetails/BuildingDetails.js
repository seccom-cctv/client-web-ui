import './BuildingDetails.css';
import BuildingTableRow from './components/BuildingTableRow';
import { AwesomeButton } from 'react-awesome-button';
import Modal from 'react-awesome-modal';
import 'react-awesome-button/dist/styles.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import 'animate.css';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import { useAuth } from "react-oidc-context";
import { BallTriangle } from 'react-loader-spinner';

const BuildingDetails = () => {
    const auth = useAuth();
    const [visible, setVisible] = useState(false);
    const [deviceType, setDeviceType] = useState("camera");
    const [deviceName, setDeviceName] = useState("");
    const [deviceNameError, setDeviceNameError] = useState(false);
    //const [deviceAddress, setDeviceAddress] = useState("");
    const [devicesList, setDeviceList] = useState(null);
    const [building, setBuilding] = useState(null);
    const [renderDevices, setRenderDevices] = useState(false);
    const [inputVisible, setInputVisible] = useState(false);
    const [buildingName, setBuildingName] = useState("");
    const [buildingAddress, setBuildingAddress] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const { building } = location.state // "useLocation" to get the state
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
        };
        fetch('https://1ffndug182.execute-api.us-east-1.amazonaws.com/test/sitesmanagement/v1/building/?id=' + building.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                setBuildingName(data[0].name);
                setBuildingAddress(data[0].address);
            });
        // eslint-disable-next-line
    }, [auth.user?.access_token])

    const handleInputVisibility = () => {
        setInputVisible(!inputVisible);
    }

    const handleBuildingName = (event) => {
        var str = event.target.value;
        setBuildingName(str);
    }

    const handleBuildingAddress = (event) => {
        var str = event.target.value;
        setBuildingAddress(str);
    }

    const handlePutBuilding = () => {
        if (!buildingName || buildingName.length <= 3 || buildingName === "null") {
            toast.error('Building name cant be null!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            return;
        }

        if (!buildingAddress || buildingAddress.length <= 3 || buildingAddress === "null") {
            toast.error('Building address cant be null!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            return;
        }

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
            body: JSON.stringify({
                name: buildingName,
                address: buildingAddress,
                company_id: location.state.building.company_id
            })
        };
        fetch('https://1ffndug182.execute-api.us-east-1.amazonaws.com/test/sitesmanagement/v1/building/' + location.state.building.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast.info('Building Updated !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                    setInputVisible(false);
                } else {
                    toast.error('Something went wrong !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                }
            })
            .then(() => {
                setBuildingName(buildingName);
                setBuildingAddress(buildingAddress);
            }
            )

    }

    const location = useLocation();

    useEffect(() => {

        let result = [];
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
        };
        fetch('https://1ffndug182.execute-api.us-east-1.amazonaws.com/test/sitesmanagement/v1/device/building_devices?building_id=' + location.state.building.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                
                data.forEach((info) => {
                    var date = info.created_at.split('T')[0];
                    result.push(<BuildingTableRow key={info.id} device={info.name} date={date} health="-" onClick={() => { removeDevice(info.id) }} />);
                });
                setDeviceList(result);
            });
        setBuilding(location.state.building);
        // eslint-disable-next-line
    }, [auth.user?.access_token, renderDevices])

    const clearForm = () => {
        setDeviceName("");
        setDeviceType("camera");
        setVisible(false);
        setDeviceNameError(false);
    }

    const addNewDevice = () => {
        setDeviceNameError(false);

        if (!deviceName || deviceName.length < 3 || deviceName === "null") {
            setDeviceNameError(true);
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
            body: JSON.stringify({
                name: deviceName,
                type: deviceType,
                building_id: location.state.building.id
            })
        };
        fetch('https://1ffndug182.execute-api.us-east-1.amazonaws.com/test/sitesmanagement/v1/device/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    let date = new Date().toJSON().split('T')[0];
                    setDeviceList(devicesList.concat(
                        <div className='animate__animated animate__fadeInDown'>
                            <BuildingTableRow key={data.id} device={deviceName} date={date} health="-" onClick={() => { removeDevice(data.id) }} />
                        </div>
                    )
                    );
                    toast.info('New Device Created !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                } else {
                    toast.error('Something went wrong !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                }
            })

        clearForm();
        setVisible(false);
    }

    const handleDeviceType = (newDevice) => {
        setDeviceType(newDevice);
    }

    const handleDeviceName = (event) => {
        var str = event.target.value;
        setDeviceName(str);
    }

    // const handleDeviceAddress = (event) => {
    //     var str = event.target.value;
    //     setDeviceAddress(str);
    // }

    const removeDevice = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
        };
        fetch('https://1ffndug182.execute-api.us-east-1.amazonaws.com/test/sitesmanagement/v1/device/' + id, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setRenderDevices(!renderDevices);
                    toast.error('Device Removed !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                } else {
                    toast.error('Something went wrong !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                }
            })
    };

    const OpenModal = () => {
        clearForm();
        setVisible(true);
    }

    const CloseModal = () => {
        clearForm();
        setVisible(false);
    }

    if (auth.isAuthenticated) {
    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className='building-details' data-testid="building-details">
                <Modal visible={visible} width="400" effect="fadeInDown" onClickAway={CloseModal}>
                    <div className='device-modal'>
                        <h1 className='device-modal-title'>Add New Device</h1>
                        <div className='device-modal-content'>
                            <label htmlFor="device-name">Type</label>
                            <select
                                id="device-type"
                                onChange={(event) => handleDeviceType(event.target.value)}
                                value={deviceType}
                            >
                                <option value="camera">Camera</option>
                                <option value="alarm">Alarm</option>
                            </select>
                        </div>
                        <div className='device-modal-content'>
                            <label htmlFor="device-name">Name</label>
                            <input id='device-name' type="text" value={deviceName} onChange={handleDeviceName} placeholder="Device name..." />
                            {deviceNameError && <span className='invalid-field'> * Company phone invalid.</span>}
                        </div>
                        <div className='device-modal-buttons'>
                            <AwesomeButton type="primary" onPress={addNewDevice}>Add</AwesomeButton>
                            <AwesomeButton type="danger" onPress={CloseModal}>Close</AwesomeButton>
                        </div>
                    </div>
                </Modal>
                <h2 className='building-details-header'>Building Details</h2>
                <div className='building-details-content'>
                    {
                        inputVisible &&
                        <>
                            <div className='building-details-content-items'>
                                <h5>Name:</h5>
                                <input type="text" value={buildingName} onChange={handleBuildingName} id="input-name" />
                            </div>
                            <div className='building-details-content-items'>
                                <h5>Location:</h5>
                                <input type="text" value={buildingAddress} onChange={handleBuildingAddress} id="input-address" />
                            </div>
                        </>
                    }
                    {
                        !inputVisible &&
                        <>
                            <div className='building-details-content-items'>
                                <h5>Name:</h5>
                                <p>{buildingName}</p>
                            </div>
                            <div className='building-details-content-items'>
                                <h5>Location:</h5>
                                <p>{buildingAddress}</p>
                            </div>
                        </>
                    }
                </div>
                <div className='add-new-camara-button'>
                    {
                        !inputVisible &&
                        <AwesomeButton type="primary" onPress={handleInputVisibility}>Edit Building</AwesomeButton>
                    }
                    {
                        inputVisible &&
                        <AwesomeButton type="primary" onPress={handlePutBuilding}>Confirm Edit</AwesomeButton>
                    }
                    <AwesomeButton type="primary" onPress={OpenModal}>New Device</AwesomeButton>
                    <AwesomeButton type="primary" onPress={() => navigate('/intrusions')}>View Intrusions</AwesomeButton>
                </div>
                <ul className="responsive-table" style={{ paddingLeft: 0 }}>
                    <li className="table-header">
                        <div className="col col-11">Device</div>
                        <div className="col col-22">Date</div>
                        <div className="col col-33">Health</div>
                        <div className="col col-44">Logs</div>
                        <div className="col col-55">Actions</div>
                    </li>
                    {devicesList}
                </ul>
            </div>
        </>
    ) }
    else {
        return (
            <>
                <div className='loading-section'>
                    <BallTriangle
                        height={80}
                        width={80}
                        radius={5}
                        color="#ccc"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                    <p>Redirecting to Login...</p>
                </div>
            </>
        )
    }
}

export default BuildingDetails;