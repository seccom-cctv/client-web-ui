import './Home.css';
import { useEffect } from "react";
import { wso2, getWithExpiry } from '../../services/wso2';

const Home = () => {

    useEffect(() => { // on window load -> wso2 authentication
        //login();
      }, []);
    
    const login = () => {
    let params = new URLSearchParams(window.location.search);
    wso2(params.get('code'));
    }

    return (
        <>
        <div className='home' data-testid="home">
            <p>Home</p>
        </div>
        </>
    )
}

export default Home;