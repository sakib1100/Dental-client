import React from 'react';

const Contact = () => {
    return (
        <div>
      <h1 class="text-4xl font-bold text-center font-semibold mb-6">Contact Us</h1>
  <div class="flex justify-center items-center mb-20">
        <div class="max-sm:m-5 bg-white rounded-lg shadow-xl p-8 w-full md:w-1/2 lg:w-1/3">
            <form id="contact-form" action="submit_form.php" method="post">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text " placeholder='Name' id="name" name="name" required class="w-full p-2 border h-10 shadow-md border-gray-300 rounded-md mt-1 focus:border-blue-300 focus:ring focus:ring-blue-200" />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" placeholder='Email' id="email" name="email" required class="w-full border p-2 h-10 shadow-md border-gray-300 mt-1 rounded-md  focus:border-blue-300 focus:ring focus:ring-blue-200" />
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-sm font-medium text-gray-700">Message:</label>
                    <textarea id="message"  placeholder='Message' name="message" rows="4" required class="w-full border p-2 border-dark border-gray-300 mt-1 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"></textarea>
                </div>
                <button type="submit" class="w-full  rounded-md py-2 px-4 hover:bg-blue-600" className='btn btn-neutral' >Submit</button>
            </form>
        </div>
  </div>
        </div>
    );
};

export default Contact;