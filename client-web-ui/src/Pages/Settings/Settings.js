import Notifications from './components/Notifications';
import TabItems from './components/TabItems';
import './Settings.css'
import user from './user.png';

const About = () => {
    return (
        <>
        <div className='about' data-testid="settings">
            <div className="tab-items-wrapper">
                <div className="tab-items-account">
                    <div className="tab-items-account-img-wrapper">
                        <img src={user} />
                    </div>
                    <h4 className="tab-items-account-name">Pedro Monteiro</h4>
                </div>
                <div className="tab-items-buttons">
                <TabItems /> 
                </div>   
            </div>
            <div className="notifications-wrapper">
                <Notifications />
            </div>
        </div>
        </>
    )
}

export default About;