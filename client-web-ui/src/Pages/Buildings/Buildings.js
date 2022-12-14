import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import BuildingCard from './components/BuildingCard';
import MoreBuildingsCard from './components/MoreBuildingsCard';
import Modal from 'react-awesome-modal';
import './Buildings.css';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom';
import { useAuth } from "react-oidc-context";
import { BallTriangle } from 'react-loader-spinner';

const Buildings = () => {
    const auth = useAuth();

    const [visible, setVisible] = useState(false);
    const [company, setCompany] = useState(0);
    const [buildingsList, setBuildingsList] = useState([]);
    const [buildingName, setBuildingName] = useState("");
    const [buildingAddress, setBuildingAddress] = useState("");
    const [buildingNameError, setBuildingNameError] = useState(false);
    const [buildingAddressError, setBuildingAddressError] = useState(false);

    const clearForm = () => {
        setBuildingAddressError(false);
        setBuildingNameError(false);
        setBuildingAddress("");
        setBuildingName("");
        setVisible(false);
    }

    const onAddBtnClick = (event) => {
        setBuildingNameError(false);
        setBuildingAddressError(false);

        if (!buildingName || buildingName.length < 3 || buildingName === "null") {
            setBuildingNameError(true);
            return;
        }

        if (!buildingAddress || buildingAddress.length < 5 || buildingAddress === "null") {
            setBuildingAddressError(true);
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
            body: JSON.stringify({
                name: buildingName,
                address: buildingAddress,
                company_id: 1
            })
        };
        fetch('https://1ffndug182.execute-api.us-east-1.amazonaws.com/test/sitesmanagement/v1/building/', requestOptions)
            .then(data => {
                if (data && parseInt(data.status) === 200) {
                    setBuildingsList(buildingsList.concat(
                        <div className='animate__animated animate__fadeInDown'>
                            <BuildingCard key={buildingName} text={buildingName} building={data} />
                        </div>
                    )
                    );
                    toast.info('New Building Created !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                } else {
                    toast.error('Something went wrong !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                    throw new Error('Something went wrong...');
                }
            })
            .catch(error => console.log(error));
        
        clearForm();

    };

    const handleBuildingNameChange = (event) => {
        var str = event.target.value;
        setBuildingName(str);
    }

    const handleBuildingAddressChange = (event) => {
        var str = event.target.value;
        setBuildingAddress(str);
    }

    const OpenModal = () => {
        setVisible(true);
    }

    const CloseModal = () => {
        clearForm();
        setVisible(false);
    }

    const GetUserBuildings = () => {
        let result = [];
        let company = 0;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
        };
        fetch('https://1ffndug182.execute-api.us-east-1.amazonaws.com/test/sitesmanagement/v1/building/manager_buildings', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("data: ", data)
                data.map((info) => {
                    result.push(
                        <BuildingCard key={info.name} text={info.name} building={info} onClick={null} />
                    )
                } )
                setCompany(company);
                setBuildingsList(result);
            })
    }

    useEffect(() => {
        // get of company buildings from id
        GetUserBuildings();
    }, [auth.user?.access_token])

        return (
            <>
                <Navbar />
                <ToastContainer />
                <div className="buildings" data-testid="buildings">
                    <h2 className="buildings-header">My Buildings</h2>
                    <div id="buildings-list-id" className='building-list'>
                        {buildingsList}
                        <MoreBuildingsCard text="New Building" onClick={OpenModal} />
                        <Modal visible={visible} width="400" effect="fadeInDown" onClickAway={CloseModal}>
                            <div id="add-building-modal" className='building-modal'>
                                <h1 className='building-modal-title'>Add Building</h1>
                                <div className='building-modal-content'>
                                    <label htmlFor="building-name">Name</label>
                                    <input id='building-name' type="text" value={buildingName} onChange={handleBuildingNameChange} placeholder="Building name..." />
                                    {buildingNameError && <span id="invalid-building-name" className='invalid-field'> * Building name invalid.</span>}
                                </div>
                                <div className='building-modal-content'>
                                    <label htmlFor="building-addres">Address</label>
                                    <input id='building-address' type="text" value={buildingAddress} onChange={handleBuildingAddressChange} placeholder="Building address..." />
                                    {buildingAddressError && <span id="invalid-building-address" className='invalid-field'> * Building address invalid.</span>}
                                </div>
                                <div className='building-modal-buttons'>
                                    <AwesomeButton type="primary" onPress={onAddBtnClick}>Add</AwesomeButton>
                                    <AwesomeButton type="danger" onPress={CloseModal}>Close</AwesomeButton>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </>
        )
    }

export default Buildings;