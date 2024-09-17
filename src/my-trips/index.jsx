import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useNavigation } from 'react-router-dom';

function MyTrips() {
    useEffect(()=>{
        GetUserTrips();
    },[])
    const GetUserTrips=async()=>{
        const user=localStorage.getItem('user');
        const navigation=useNavigation();
        if(!user){
            navigation('/');
            return;
        }
        const q=query(collection(db,'AITrips'),where('userEmail','==',user?.email));
        const querySnapshot=await getDocs(q);
    }
  return (
    <div>MyTrips</div>
  )
}

export default MyTrips