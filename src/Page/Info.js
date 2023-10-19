import React from 'react';
import InfoClock from './InfoClock';
import InfoPhone from './InfoPhone';
import InfoLocation from './InfoLocation';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-10'>
            <InfoClock />
            <InfoLocation />
            <InfoPhone />
        </div>
    );
};

export default Info;