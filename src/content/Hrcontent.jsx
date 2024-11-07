import { useEffect, useState } from 'react';
import {  db2 } from '../config/Hrfirebabe';
import { collection, where, query, onSnapshot, updateDoc, doc } from 'firebase/firestore';

const Hrcontent = () => {
  const [requests, setRequests] = useState([]);
  const [requestModal ,setRequestModal] = useState(false)

  useEffect(() => {
    const overTimeRef = collection(db2, 'overtimeRequests');
    const queryTime = query(overTimeRef, where('status', '==', 'pending'));

    const unsubscribe = onSnapshot(queryTime, (snapshot) => {
      const requestsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setRequests(requestsData);
      /* console.log("Pending Overtime Requests:", requestsData); */
    });

    return () => unsubscribe();
  }, []);

  const handleApproval=async(id, status)=>{
    await updateDoc(doc(db2 ,'overtimeRequests', id), {status})
  }

  const handlerequestModal =()=> setRequestModal(false)

  return (
    <div>
      <h2>Pending Overtime Requests</h2>
      {requests.length > 0 ? (
        requests.map((request) => (
          <div key={request.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
            <p>User-Email: {request.userId}</p>
          <p> Reason: {request.reason}</p>
          
          <div className='flex justify-center gap-3'>
          <button onClick={() => handleApproval(request.id, 'approved')}   className='rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white text-slate-900 sm:w-1/6'>Approve</button>
          <button onClick={() => handleApproval(request.id, 'rejected')} className='rounded-3xl border border-solid border-slate-900 bg-white py-2 px-6 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white text-slate-900 sm:w-1/6 '>Reject</button>
          </div>
          </div>
        ))
      ) : (
        <p>No pending requests found.</p>
      )}
    </div>
  );
};

export default Hrcontent;
