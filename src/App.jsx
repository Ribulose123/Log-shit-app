
import Home from './content/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import Employees from './content/Employees'
import { AnimatePresence } from 'framer-motion'
import Hrpage from './Hrpage'
import Navbar from './content/Navbar'

function App() {
  const location = useLocation()

  return (
   <div  className='w-screen'>
         <Navbar/>
      <AnimatePresence>
       
      <Routes location={location} key={location.pathname}>
        <Route path='/' element ={<Home/>}/>
        <Route  path='/employees'  element={<Employees/>}/>
        <Route  path='/hrpage'  element={<Hrpage/>}/>
      </Routes>
      </AnimatePresence>
   </div>
  )
}

export default App
