import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Settings from './Pages/Settings/Settings';
import Services from './Pages/Services/Services';
import Cameras from './Pages/Cameras/Cameras';
import Sensors from './Pages/Sensors/Sensors';
import Footer from './components/Footer/Footer';
import Login from './Pages/Login/Login';
import Buildings from './Pages/Buildings/Buildings';
import BuildingDetails from './Pages/BuildingDetails/BuildingDetails';
import Intrusions from './Pages/Intrusions/Intrusions';

function App() {
  return (
    <div data-testid="App" className='app'>
      <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/cameras' element={<Cameras />} />
          <Route path='/sensors' element={<Sensors />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/building' element={<BuildingDetails />} />
          <Route path='/intrusions' element={<Intrusions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
