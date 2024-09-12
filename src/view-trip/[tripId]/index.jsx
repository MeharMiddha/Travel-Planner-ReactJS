import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';

function ViewTrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState([]);
    useEffect(()=>{
        tripId&&GetTripData();
    },[tripId])
    const GetTripData=async()=>{
        const docRef=doc(db, 'AITrips', tripId);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Document: ", docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No Such Document");
            toast("No Trip Found 😞")
        }
    }
  return (
    <div>
        {/* Information Section  */}

        {/* Recommended Hotels  */}

        {/* Daily Plan  */}

        {/* Footer  */}
    </div>
  )
}

export default ViewTrip