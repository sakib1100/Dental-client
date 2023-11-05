import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
        

<div className=" lg:p-28 max-sm:p-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/MGm0dyT/ai-generated-8223597-1280.jpg" className="max-w-md max-sm:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental Cara.On your terms.</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-neutral"><Link to="/appoinment">Book Now</Link></button>
    </div>
  </div>
</div>


                  
                                
              </div>
    );
};

export default About;