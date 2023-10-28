import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';
import ServiceSlots from '../Page/ServiceSlots';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({date}) => {
    const [data,setData] = useState([]);
    const [treatMent,setTreatMent] = useState(null);
    useEffect(() => {
        fetch('https://dental-server-nu.vercel.app/serviceGet')
        .then(res => res.json())
        .then(slot => setData(slot))
    },[])
    return (
        <div>
          <p className='text-center font-bold'>You have selected: {format(date, 'PP')}</p>  
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-20'>
            {
             data.map(slot => <ServiceSlots
                slot={slot}
             key={slot._id}
             setTreatMent={setTreatMent}
             ></ServiceSlots>)
            }
         </div>
         {treatMent && <BookingModal date={date} setTreatMent={setTreatMent}  treatMent={treatMent}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;