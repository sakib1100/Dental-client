import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
 <div class="lg:hero lg:min-h-screen bg-base-200 p-10">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/dkK4mg2/bruno-rodrigues-279x-IHym-PYY-unsplash-removebg-preview.png" class="lg:max-w-sm max-sm:min-w-sm rounded-lg " />
    <div>
      <h1 class="text-5xl max-sm:text-4xl font-bold">Your Health Is Your Smile.</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
      <button class="btn btn-neutral"><Link to="/appoinment">Book Now</Link></button>
    </div>
  </div>
</div>           
        </div>
    );
};

export default Banner;