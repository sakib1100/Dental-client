import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmenBanner from './AppoinmenBanner'
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
  const [date,setDate] = useState(new Date());

    return (
        <div>
      <AppoinmenBanner date={date} setDate={setDate}></AppoinmenBanner> 
      <AvailableAppoinment date={date}></AvailableAppoinment>
      <Footer></Footer>    
        </div>
    );
};

export default Appoinment;