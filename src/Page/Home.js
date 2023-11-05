import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import About from './About';
import MakeAppoinment from '../Appoinment/MakeAppoinment';
import Testimonial from './Testimonial';
import Footer from '../Shared/Footer';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='max-w-7xl  mx-auto '>
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <About></About>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>



    

  
    {/* <section id="contact" className="py-16">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-lg mt-4">We are here to answer your questions. Don't hesitate to get in touch!</p>
            <a href="#appointment" className="btn btn-primary mt-6">Schedule an Appointment</a>
        </div>
    </section>

    <footer className="bg-blue-500 text-white text-center py-4">
        <div className="container mx-auto">
            <p>&copy; 2023 Your Dental Clinic</p>
        </div>
    </footer> */}


        </div>
    );
};

export default Home;