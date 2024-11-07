import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth1 } from '../config/Hrfirebabe'
import { Link } from "react-router-dom"
import HrLogin from '../content/HrLogin';

const HrAuthentiction = () => {
    const [onAuthentication, setOnAuthentication] = useState(null)
  const [showModal, setShowModal] = useState(false)
  

  const navigate = useNavigate()

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth1, (user) => {
      setOnAuthentication(user)
      setShowModal(false)
   
    })
    return () => listenAuth()
  }, [])

  const logOut = () => {
    signOut(auth1)
    navigate('/hrpage')
  }



 
  return (
    <>
      {onAuthentication ? (
        <>
          <button
            className="rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white text-slate-900 sm:w-1/6"
            onClick={logOut}
          >
            Sign Out
          </button>
        
        </>
      ) : (

       <> 
       <Link to='/' className="text-2xl">Home</Link>
       <button
         className="rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white sm:w-1/6 text-slate-900"
         onClick={() => setShowModal(true)}
       >
         Sign in
       </button></>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <HrLogin closeModal={() => setShowModal(false)} />
        </div>
      )}

    
    </>
  )
}

export default HrAuthentiction
