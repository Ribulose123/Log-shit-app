// Authentication.js
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Timestamp, setDoc, doc, updateDoc } from 'firebase/firestore';
import { authPoint, db } from './fire'
import Firebase from '../content/Firebase';

const Authentication = () => {
  const [onAuthentication, setOnAuthentication] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [clockModal, setClockModal] = useState(false)
  const [overtimeModal, setOvertimeModal] = useState(false)
  const [overtimeReason, setOvertimeReason] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const listenAuth = onAuthStateChanged(authPoint, (user) => {
      setOnAuthentication(user)
      setShowModal(false)
      setClockModal(false)
      setOvertimeModal(false)
    })
    return () => listenAuth()
  }, [])

  const logOut = () => {
    signOut(authPoint)
    navigate('/mainemployees')
  }

  const requestOverTime = async () => {
    try {
      const user = authPoint.currentUser
      const email = user.email
      const timeStamp = Timestamp.now()
      const overTimeRef = doc(db, 'overtimeRequests', `${email}-${new Date().toDateString()}`)

      await setDoc(overTimeRef, {
        userId: email,
        requestedAt: timeStamp,
        reason: overtimeReason,
        status: 'pending'
      })
      setOvertimeModal(false)
      alert('Overtime request submitted successfully!')
    } catch (err) {
      console.error(err)
    }
    setOvertimeModal(false)
    setClockModal(false)
  }

  const clockIn = async () => {
    const user = authPoint.currentUser
    const email = user.email
    const timeStamp = Timestamp.now()
    const clockRef = doc(db, 'clockLog', `${email}-${new Date().toDateString()}`)

    await setDoc(clockRef, {
      userId: email,
      clockin: timeStamp,
      status: new Date().toDateString()
    })
    setClockModal(false)
    alert('Clocked In Successfully!')
  }

  const clockOut = async () => {
    const user = authPoint.currentUser
    const email = user.email
    const timeStamp = Timestamp.now()
    const clockRef = doc(db, 'clockLog', `${email}-${new Date().toDateString()}`)

    await updateDoc(clockRef, {
      clockOutTime: timeStamp,
      status: 'Clocked Out'
    })
    setClockModal(false)
    alert('Clocked Out Successfully!')
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
          <button
            className="rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white text-slate-900 sm:w-1/"
            onClick={() => setClockModal(true)}
          >
            Clock 🕙
          </button>
        </>
      ) : (
        <button
          className="rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white sm:w-1/6 text-slate-900"
          onClick={() => setShowModal(true)}
        >
          Sign in
        </button>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <Firebase closeModal={() => setShowModal(false)} />
        </div>
      )}

      {clockModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-md mx-auto relative border border-gray-200 flex items-center justify-around">
            <button
              className="rounded-3xl border border-solid border-slate-900 bg-white dark:bg-black py-3 px-4 shadow-xl dark:border-gray-100 text-slate-900 dark:text-white"
              onClick={clockIn}
            >
              Clock In
            </button>
            <button
              className="rounded-3xl border border-solid border-slate-900 bg-white dark:bg-black py-3 px-3 shadow-xl dark:border-gray-100 text-slate-900 dark:text-white"
              onClick={clockOut}
            >
              Clock Out
            </button>
            <button
              className="rounded-3xl border border-solid border-slate-900 bg-white dark:bg-black py-3 px-3 shadow-xl dark:border-gray-100 text-slate-900 dark:text-white"
              onClick={() => setOvertimeModal(true)}
            >
              Request Overtime
            </button>
          </div>
        </div>
      )}

      {overtimeModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md mx-auto relative border border-gray-200">
            <h2 className="text-xl mb-4">Overtime Request</h2>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-gray-300 rounded text-slate-900"
              placeholder="Overtime reason"
              value={overtimeReason}
              onChange={(e) => setOvertimeReason(e.target.value)}
            />
            <button
              className="rounded-3xl border border-solid border-slate-900 bg-teal-700 text-white py-2 px-4 shadow-xl"
              onClick={requestOverTime}
              disabled={!overtimeReason}
            >
              Submit Request
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Authentication
