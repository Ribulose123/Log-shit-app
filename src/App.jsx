import Home from './content/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Employees from './content/Employees';
import MainEmployee from './content/MainEmployee';
import Hrpage from './Hrpage';
import Navbar from './content/Navbar';

function App() {
  const location = useLocation();

  return (
    <div className="w-screen">
     
      {location.pathname !== '/' && <Navbar />}
      
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/mainemployees" element={<MainEmployee />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/hrpage" element={<Hrpage />} />
      </Routes>
    </div>
  );
}

export default App;
