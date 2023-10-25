import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const BookingModal = ({treatMent,date,setTreatMent}) => {
  const {name,slots} = treatMent;
const [user] = useAuthState(auth);
const handleAddService = (event) => {
  event.preventDefault();
  const slot = event.target.slot.value;
  const name = event.target.name.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  console.log(slot,name,email,phone);
  setTreatMent(null);
}
    return (
    <div>
 <input type="checkbox" id="bookngModal" class="modal-toggle" />
<div class="modal">

  <div class="modal-box">
  <label for="bookngModal" class="btn absolute right-2 top-2 btn-circle">X</label>
    <h3 class=" text-lg">Booking for:- <span className='font-bold text-xl'>{name}</span></h3>
    <form onSubmit={handleAddService} className='grid mt-5 grid-cols-1 gap-3 justify-items-center'>
    <input name="slot" disabled value={format(date, 'PP')}  class="input input-bordered w-full max-w-xs" />
    <input type="text" disabled value={user?.displayName || ''}  class="input input-bordered w-full max-w-xs" />
    <input type="email" disabled value={user?.email  || ''}  class="input input-bordered w-full max-w-xs" />
    <input type="number" name="phone" placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
    <input type="submit"  class="btn  btn-neutral w-full max-w-xs" />

    </form>
    {/* <div class="modal-action">
     
    </div> */}
   
  </div>
</div>
    </div>
    );
};

export default BookingModal;