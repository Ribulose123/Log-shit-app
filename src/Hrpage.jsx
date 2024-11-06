import React, { useEffect, useState } from 'react'
import { db } from './config/fire'
import { collection, where, query, updateDoc, doc, onSnapshot } from 'firebase/firestore'

const Hrpage = () => {
const [requests, setRequests] = useState([])

useEffect(()=>{
    const overTimeRef = collection(db, 'overtimeRequests')
    const qureyTime = query(overTimeRef, where('status', '==', 'pending'))

    const unsubscribe = onSnapshot(qureyTime, (snapshot) => {
        const requestsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setRequests(requestsData);
        console.log("Pending Overtime Requests:", requestsData);
    });

    return()=>unsubscribe()

}, [])

  return (
    <div>
      yes man
      
    </div>
  )
}

export default Hrpage
