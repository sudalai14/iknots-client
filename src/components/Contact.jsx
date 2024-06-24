import React from 'react';
//import backgroundImage from '../assets/contact-background.png';
import Slide from './Slide';
const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gray-100 bg-cover bg-center" >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Contact Us</h2>
        <Slide delay={0.3}>
        <p className="mt-4 text-gray-600">
          Get in touch with us for any inquiries or to request our services...
        </p>
        <form className="mt-8 max-w-lg mx-auto" action="https://formspree.io/f/mnqeeonr" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">Submit</button>
        </form>
        </Slide>
       
      </div>
    </div>
  );
};

export default Contact;
