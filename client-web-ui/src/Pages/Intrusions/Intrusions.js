import './Intrusions.css';
import IntrusionListItem from './components/IntrusionListItem';
import ScreenNavbar from '../../components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { useAuth } from "react-oidc-context";
import { useLocation } from 'react-router-dom';

const Intrusions = (props) => {
    const [intrusionList, setIntrusionList] = useState([]);
    const [data, setData] = useState(null);
    const auth = useAuth();

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
        fetch('https://gxdowy8at3.execute-api.eu-west-3.amazonaws.com/test/sitesmanagement/v1/device/building_videos?building_id=' + location.state.building.id, requestOptions)
            .then(response => response.json())
            .then(info => {
                console.log(location.state.building.id)
                info.map((el) => {
                    console.log(el.LastModified)
                    result.push(<IntrusionListItem id={el.Key} date={el.LastModified} type={el.Key + " Size: " + el.Size} url={"https://s3.eu-west-3.amazonaws.com/seccom.video.store.1/"+el.Key} />)
                })
                setData(result);
            });
        // eslint-disable-next-line
    }, [auth.user?.access_token])


    return (
        <>
            <ScreenNavbar />
            <div className='intrusions-section'>
                <ul className="responsive-table" style={{ paddingLeft: 0 }}>
                    <li className="table-header">
                        <div className="col col-11">ID</div>
                        <div className="col col-22">Date</div>
                        <div className="col col-33">Camera</div>
                        <div className="col col-44">View</div>
                    </li>
                    {data}
                </ul>
            </div>
        </>
    )
}

export default Intrusions;