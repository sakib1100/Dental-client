import React from 'react';

const ServiceSlots = ({slot}) => {
 const {name,slots} = slot;
    return (
        <div class="card lg:max-w-lg bg-base-200 shadow-md">
        <div class="card-body text-center">
          <h2 class="text-2xl font-bold text-center">{name}</h2>
          <p>{
          slots.length > 0 ? <span>{slots[0]}</span>: <p className='text-error'>No slot available</p>
        } </p>
         <p>{slots.length} Space available</p>
          <div class="card-actions justify-center">
            <button disabled={slots.length == 0} class="btn btn-neutral">Book Appoinment</button>
          </div>
        </div>
      </div>
    );
};

// otherwise the dentla sergarh
export default ServiceSlots;