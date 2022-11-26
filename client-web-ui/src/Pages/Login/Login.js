import './Login.css';
import background from './video.mp4';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='login'>
                <video src={background} autoPlay loop muted />
            </div>
            <div className='login-content'>
                <h1>Welcome to SecCom!</h1>
                <p>The best security service!</p>
                <button className='login-button' onClick={() => navigate('/cameras')}>
                    Login
                </button>
            </div>
        </>
    )
}

export default Login;