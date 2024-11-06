import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Timestamp, setDoc, doc, updateDoc } from 'firebase/firestore';
import { authPoint, db } from './fire';
import Firebase from '../content/Firebase';

const Authentication = () => {
  const [onAuthentication, setOnAuthentication] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [clockModal, setClockModal] = useState(false);
  const [overtimeModal, setOvertimeModal] = useState(false);
  const [overtimeReason, setOvertimeReason] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const listenAuth = onAuthStateChanged(authPoint, (user) => {
      setOnAuthentication(user);
    });
    return () => listenAuth(); 
  }, []);

  const logOut = async () => {
    try {
      await signOut(authPoint);
      navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const requestOverTime = async () => {
    if (!onAuthentication) return;
    try {
      const email = onAuthentication.email;
      const timeStamp = Timestamp.now();
      const overTimeRef = doc(db, 'overtimeRequests', `${email}-${new Date().toDateString()}`);

      await setDoc(overTimeRef, {
        userId: email,
        requestedAt: timeStamp,
        reason: overtimeReason,
        status: "pending",
      });
      setOvertimeModal(false);
      setClockModal(false);
      alert('Overtime request submitted successfully!');
    } catch (error) {
      console.error("Error submitting overtime request:", error);
    }
  };

  const clockIn = async () => {
    if (!onAuthentication) return;
    try {
      const email = onAuthentication.email;
      const timeStamp = Timestamp.now();
      const clockRef = doc(db, 'clockLog', `${email}-${new Date().toDateString()}`);

      await setDoc(clockRef, {
        userId: email,
        clockin: timeStamp,
        status: "Clocked In",
      });
      setClockModal(false);
      alert('Clocked In Successfully!');
    } catch (error) {
      console.error("Error clocking in:", error);
    }
  };

  const clockOut = async () => {
    if (!onAuthentication) return;
    try {
      const email = onAuthentication.email;
      const timeStamp = Timestamp.now();
      const clockRef = doc(db, 'clockLog', `${email}-${new Date().toDateString()}`);

      await updateDoc(clockRef, {
        clockOutTime: timeStamp,
        status: 'Clocked Out',
      });
      setClockModal(false);
      alert('Clocked Out Successfully!');
    } catch (error) {
      console.error("Error clocking out:", error);
    }
  };

  const handleClockModal = () => setClockModal(true);
  const handleOvertimeModal = () => setOvertimeModal(true);
  const handModel = () => setShowModal(true);

  return (
    <>
      {onAuthentication ? (
        <>
          <button onClick={logOut} className=' rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white sm:w-1/6 text-slate-900'>Sign Out</button>
          <button onClick={handleClockModal} className=' rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white sm:w-1/6 text-slate-900'>Clock 🕙</button>
        </>
      ) : (
        <button onClick={handModel} className=' rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white sm:w-1/6 text-slate-900'>Sign In</button>
      )}

      {showModal && (
        <div className="modal-fade modal-visible fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <Firebase closeModal={() => setShowModal(false)} />
        </div>
      )}

      {clockModal && (
        <div className="modal-fade modal-visible fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto relative border flex items-center justify-around">
            <button onClick={clockIn}  className='rounded-3xl border border-solid border-slate-900 bg-white dark:bg-black py-3 px-4 shadow-xl dark:border-gray-100 text-slate-900  dark:text-white' >Clock In</button>
            <button onClick={clockOut}  className='rounded-3xl border border-solid border-slate-900 bg-white dark:bg-black py-3 px-4 shadow-xl dark:border-gray-100 text-slate-900  dark:text-white' >Clock Out</button>
            <button onClick={handleOvertimeModal}  className='rounded-3xl border border-solid border-slate-900 bg-white dark:bg-black py-3 px-4 shadow-xl dark:border-gray-100 text-slate-900  dark:text-white' >Request Overtime</button>
          </div>
        </div>
      )}

      {overtimeModal && (
        <div className="modal-fade modal-visible fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md mx-auto relative border">
            <h2 className="text-xl mb-4 text-white">Overtime Request</h2>
            <input
              type="text"
              className="input-field"
              placeholder="Overtime reason"
              value={overtimeReason}
              onChange={(e) => setOvertimeReason(e.target.value)}
            />
            <button
              onClick={requestOverTime}
              disabled={!overtimeReason}
              className="rounded-3xl border border-solid border-slate-900 bg-teal-700 text-white py-2 px-4 shadow-xl"
            >
              Submit Request
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Authentication;
