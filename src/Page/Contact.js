import React from 'react';

const Contact = () => {
    return (
        <div>
      <h1 className="text-4xl font-bold text-center font-semibold mb-6">Contact Us</h1>
  <div className="flex justify-center items-center mb-20">
        <div className="max-sm:m-5 bg-white rounded-lg shadow-xl p-8 w-full md:w-1/2 lg:w-1/3">
            <form id="contact-form" action="submit_form.php" method="post">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text " placeholder='Name' id="name" name="name" required className="w-full p-2 border h-10 shadow-md border-gray-300 rounded-md mt-1 focus:border-blue-300 focus:ring focus:ring-blue-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" placeholder='Email' id="email" name="email" required className="w-full border p-2 h-10 shadow-md border-gray-300 mt-1 rounded-md  focus:border-blue-300 focus:ring focus:ring-blue-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                    <textarea id="message"  placeholder='Message' name="message" rows="4" required className="w-full border p-2 border-dark border-gray-300 mt-1 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"></textarea>
                </div>
                <button type="submit" className="w-full  rounded-md py-2 px-4 hover:bg-blue-600" className='btn btn-neutral' >Submit</button>
            </form>
        </div>
  </div>
        </div>
    );
};

export default Contact;