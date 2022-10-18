import Notifications from './components/Notifications';
import TabItems from './components/TabItems';
import './Settings.css'

const About = () => {
    return (
        <>
        <div className='about' data-testid="settings">
            <div className="tab-items-wrapper">
                <TabItems />    
            </div>
            <div className="notifications-wrapper">
                <Notifications />
            </div>
        </div>
        </>
    )
}

export default About;