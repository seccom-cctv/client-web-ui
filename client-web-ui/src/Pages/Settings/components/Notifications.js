import { useEffect, useState } from 'react';
import './Notifications.css'
import { useAuth } from "react-oidc-context";

const Notifications = () => {
    const auth = useAuth();
    const [emailChecked, setEmailChecked] = useState(false);
    const [noContactChecked, setnoContactChecked] = useState(true);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
        };
        fetch('http://localhost:8082/v1/manager', requestOptions)
            .then(response => response.json())
            .then(data => {
                var x = data[0].preferences.replace("\\", "");
                console.log(x)
                if (String(x).includes("email")) {
                    console.log("email")
                    setEmailChecked(true);
                    setnoContactChecked(false);
                } else {
                    setEmailChecked(false);
                    setnoContactChecked(true);
                }
            });
        // eslint-disable-next-line
    }, [auth.user?.access_token])

    const handleEmailCheck = () => {
        setEmailChecked(true);
        setnoContactChecked(false);
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
            body: JSON.stringify({
                idp_id: "string",
                permissions: 0,
                preferences: '{"notifications": {"from": ["alarms", "cameras"], "to": ["email"]}}',
                company_id: 0,
            })
        };
        fetch('http://localhost:8082/v1/manager/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log("yes")
                } else {
                    console.log("error")
                }
            });
    }

    const handleNoContactCheck = () => {
        setEmailChecked(false);
        setnoContactChecked(true);
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
            body: JSON.stringify({
                idp_id: "string",
                permissions: 0,
                preferences:'{"notifications": {"from": ["alarms", "cameras"], "to": [""]}}',
                company_id: 0,
            })
        };
        fetch('http://localhost:8082/v1/manager/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log("yes")
                } else {
                    console.log("error")
                }
            });
    }

    return (
        <div className="notifications">
            <h3 className="notifications-header">Notifications</h3>
            <div className="notifications-preferences">
                <h5 className="notifications-title">Notification Preference</h5>
                <form className="notification-preferences-form">
                    <div>
                        <input type="checkbox" onChange={handleEmailCheck} checked={emailChecked} id="email" name="email" value="email" />
                        <label for="email">Email</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={handleNoContactCheck} checked={noContactChecked} id="nocontact" name="nocontact" value="nocontact" />
                        <label for="nocontact">No contact</label>
                    </div>
                </form>
            </div>
            <div className="notifications-about">
                <h5 className="notifications-title">Receive Notifications About</h5>
                <form className="notification-about-form">
                    <div>
                        <input checked disabled type="checkbox" id="alarms" name="alarm" value="alarm" />
                        <label for="alarm">Alarms</label>
                    </div>
                    <div>
                        <input checked disabled type="checkbox" id="intruders" name="intruder" value="intruder" />
                        <label for="intruder">Cameras</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Notifications;