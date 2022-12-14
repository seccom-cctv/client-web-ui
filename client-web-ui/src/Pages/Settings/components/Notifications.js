import { useState } from 'react';
import './Notifications.css'

const Notifications = () => {

    const [emailChecked, setEmailChecked] = useState(false);
    const [noContactChecked, setnoContactChecked] = useState(true);

    const handleEmailCheck = () => {
        setEmailChecked(true);
        setnoContactChecked(false);
    }

    const handlenoContactCheck = () => {
        setEmailChecked(false);
        setnoContactChecked(true);
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
                        <input type="checkbox" onChange={handlenoContactCheck} checked={noContactChecked} id="nocontact" name="nocontact" value="nocontact" />
                        <label for="nocontact">No contact</label>
                    </div>
                </form>
            </div>
            <div className="notifications-about">
                <h5 className="notifications-title">Receive Notifications About</h5>
                <form className="notification-about-form">
                    <div>
                        <input type="checkbox" id="alarms" name="alarm" value="alarm" />
                        <label for="alarm">Alarms</label>
                    </div>
                    <div>
                        <input type="checkbox" id="intruders" name="intruder" value="intruder" />
                        <label for="intruder">Intruders</label>
                    </div>
                    <div>
                        <input type="checkbox" id="animals" name="animal" value="animal" />
                        <label for="animal">Animals</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Notifications;