import React from 'react';

const Testimonial = () => {
    return (
        <div>
         <div className='max-sm:p-10 p-20'>
        <h1 className='text-4xl text-center font-bold'>Testimonial</h1> 

        <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-7'>


        <div className='shadow-md p-5'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur orci tortor, eget laoreet nibh laoreet sed. Maecenas semper ex ut est sodales porta. Maecenas sit amet ullamcorper ex. Vestibulum 
      </p>
        <div className='flex gap-5 mt-6'>
        <div className="avatar">
  <div className="w-12 max-sm:w-25 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/2c3RbLj/sander-sammy-38-Un6-Oi5be-E-unsplash.jpg" />
  </div>
</div>
            <div >
                <h1 className='font-bold'>Dr. Jakasen</h1>
                <p>China</p>
            </div>
        </div>
        </div>

        <div className='shadow-md p-5'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur orci tortor, eget laoreet nibh laoreet sed. Maecenas semper ex ut est sodales porta. Maecenas sit amet ullamcorper ex. Vestibulum 
      </p>
        <div className='flex gap-5 mt-6'>
        <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/2c3RbLj/sander-sammy-38-Un6-Oi5be-E-unsplash.jpg" />
  </div>
</div>
            <div >
                <h1 className='font-bold'>Dr. Dabid</h1>
                <p>United Kingdom</p>
            </div>
        </div>
        </div>

       <div className='shadow-md p-5'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur orci tortor, eget laoreet nibh laoreet sed. Maecenas semper ex ut est sodales porta. Maecenas sit amet ullamcorper ex. Vestibulum 
      </p>
        <div className='flex gap-5 mt-6'>
        <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/2c3RbLj/sander-sammy-38-Un6-Oi5be-E-unsplash.jpg" />
  </div>
</div>
            <div >
                <h1 className='font-bold'>Dr. Nasim Kabir</h1>
                <p>Bangladesh</p>
            </div>
        </div>
        </div>

        </div>

         </div>   
        </div>
    );
};

export default Testimonial;