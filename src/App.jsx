import Home from './content/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Employees from './content/Employees';
import MainEmployee from './content/MainEmployee';
import Hrpage from './Hrpage';
import Navbar from './component/Navbar';
import HrNavbar from './component/HrNavbar';
import Hrcontent from './content/Hrcontent';

function App() {
  const location = useLocation();

  const renderNavbar =()=>{
    if( location.pathname === '/hrpage'  || location.pathname === '/hrcontent'){
      return <HrNavbar/>
    } else if (location.pathname === '/mainemployees' || location.pathname === '/employees' ){
      return <Navbar/>
    }
    return null
  }

  return (
    <div className="w-screen">
     
      {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hrpage" element={<Hrpage />} />
        <Route path="/mainemployees" element={<MainEmployee />} />
        <Route path='/employees'  element ={<Employees/>}/>
        <Route path='/hrcontent' element ={<Hrcontent/>}/>
      </Routes>
    </div>
  );
}

export default App;
