import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';
import ServiceSlots from '../Page/ServiceSlots';

const AvailableAppoinment = ({date}) => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
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
             ></ServiceSlots>)
            }
         </div>
        </div>
    );
};

export default AvailableAppoinment;