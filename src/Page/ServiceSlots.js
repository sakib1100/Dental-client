import React from 'react';

const ServiceSlots = ({slot,setTreatMent}) => {
 const {name,slots} = slot;
    return (
        <div className="card lg:max-w-lg bg-base-200 shadow-md">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-center">{name}</h2>
          <p>{
          slots.length > 0 ? <span>{slots[0]}</span>: <p className='text-error'>No slot available</p>
        } </p>
         <p>{slots.length} Space available</p>
          <div className="card-actions justify-center">

          <label htmlFor="bookngModal" className='btn  btn-outline'  disabled={slots.length == 0} onClick={() => setTreatMent(slot)}>Book Appoinment</label>
          </div>
        </div>
      </div>
    );
};

// otherwise the dentla sergarh
export default ServiceSlots;