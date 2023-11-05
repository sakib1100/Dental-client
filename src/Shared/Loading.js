import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>     
            <span className="loading loading-bars loading-lg"></span>
  </div>
    );
};

export default Loading;