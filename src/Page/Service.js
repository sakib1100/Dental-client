import React from 'react';

const Service = () => {
    return (
        <div>
             <section id="services" class="p-10 mt-10">
        <div class="container mx-auto text-center">
            <h2 class="text-5xl max-sm:text-4xl font-bold">Our Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <div class="bg-white p-4 rounded-lg shadow-lg ">
                  <img height={100} width={90} src="https://img.icons8.com/water-color/50/dental-checkup.png" className='mx-auto ' alt='/'></img>
                    <h3 class="text-xl font-semibold">Dental Checkup</h3>
                    <p class="mt-2">Regular checkups are essential for maintaining good oral health.</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-lg">
                <img height={100} width={90} src="https://img.icons8.com/nolan/100/dental-anesthesia.png" className='mx-auto  ' alt='/'></img>

                    <h3 class="text-xl font-semibold">Teeth Whitening</h3>
                    <p class="mt-2">Get a brighter and whiter smile with our professional teeth whitening services.</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-lg">
                <img height={100} width={90} src="https://img.icons8.com/dusk/100/dental-filling.png" className='mx-auto ' alt='/'></img>

                    <h3 class="text-xl font-semibold">Orthodontics</h3>
                    <p class="mt-2">We offer orthodontic treatments to align your teeth and improve your smile.</p>
                </div>
            </div>
        </div>
    </section>
 
        </div>
    );
};

export default Service;