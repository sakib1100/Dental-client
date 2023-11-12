import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {
const [appoinment,setAppoinment] = useState([]);
const [user] = useAuthState(auth);
  useEffect(() =>{
   if(user){
    fetch(`https://dental-server-ten.vercel.app/getBooking?patient=${user.email}`)
    .then((response) => response.json())
    .then((json) => setAppoinment(json));
   }

  },[user]);


  const handleDelete = id => {
    const proceed = window.confirm('Are you sure want to delete this Appoinment?');
    if(proceed){
      const url  = `https://dental-server-ten.vercel.app/DeleteData/${id}`;
      fetch(url,{
         method : 'DELETE'
      })
     .then(res => res.json())
     .then(datas => {
             if(datas.deletedCount > 0){
              console.log('deleted');
              const remaining = appoinment.filter(ur => ur._id !== id);
              setAppoinment(remaining);
             }
     })
    }
  }


    return (
        <div className='lg:m-20 max-sm:m-5'>
         <h2>My Appoinment : {appoinment.length}</h2> 
         <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Date</th>
        <th>Treatment</th>
        <th className='max-sm:d-none'>Phone</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
    {
        appoinment?.map((a,index) =>  <tr className="bg-base-200" key={a._id} a={a}>
        <th>{index + 1}</th>
        <td>{a.patentName}</td>
        <td>{a.date}</td>
        <td>{a.treatMent}</td>
        <td>{a.phone}</td>
        <td><button onClick={() => handleDelete(a._id)} className='btn btn-sm text-white btn-error'>Delete</button></td>
      </tr>)
    }
     
    
     
    </tbody>
  </table>
</div>  
        </div>
    );
};

export default MyAppoinment;