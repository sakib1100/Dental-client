import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {
const [appoinment,setAppoinment] = useState([]);
const [user] = useAuthState(auth);
  useEffect(() =>{
   if(user){
    fetch(` https://dental-server-ten.vercel.app/getBooking?patient=${user.email}`)
    .then((response) => response.json())
    .then((json) => setAppoinment(json));
   }

  },[user]);
    return (
        <div className='lg:m-20 max-sm:m-5'>
         <h2>My Appoinment : {appoinment.length}</h2> 
         <div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Treatment</th>
        <th className='max-sm:d-none'>Phone</th>
      </tr>
    </thead>
    <tbody>
    {
        appoinment?.map((a,index) =>  <tr class="bg-base-200">
        <th>{index + 1}</th>
        <td>{a.patentName}</td>
        <td>{a.date}</td>
        <td>{a.treatMent}</td>
        <td>{a.phone}</td>
      </tr>)
    }
     
    
     
    </tbody>
  </table>
</div>  
        </div>
    );
};

export default MyAppoinment;