import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Settings from './Pages/Settings/Settings';
import Services from './Pages/Services/Services';
import Cameras from './Pages/Cameras/Cameras';
import Sensors from './Pages/Sensors/Sensors';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div data-testid="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/cameras' element={<Cameras />} />
          <Route path='/sensors' element={<Sensors />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
