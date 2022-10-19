import './TabItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faLock, faBell } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TabItems = () => {

    const [active, setActive] = useState(true);

    return (
        <div className="tab-items">
            <ul className="tab-items-list">
                <li><FontAwesomeIcon icon={faUser} className="tab-item-icon" />Profile</li>
                <li><FontAwesomeIcon icon={faLock} className="tab-item-icon" />Password</li>
                <li><FontAwesomeIcon icon={faKey} className="tab-item-icon" />Security</li>
                <li className={active ? "tab-items-list-item-active" : "tab-items-list-item-active"}><FontAwesomeIcon icon={faBell} className="tab-item-icon " />Notification</li>
            </ul>
        </div>
    )
}

export default TabItems;