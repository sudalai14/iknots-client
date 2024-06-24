import React from 'react';
//import backgroundImage from '../assets/backgroundImage.jpg'; // Replace with the path to your background image
import Slide from "./Slide";

const Founders = () => {
  return (
    <div className="container mx-auto text-center bg-opacity-75 p-6 rounded-md">
      <h2 className="text-3xl font-bold text-black">Our Founders</h2>
      <Slide delay={0.3}>
        <p className="mt-4 text-gray-600">
          Meet the visionary minds behind MARK Construction...
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-black">
            Mr.<span className="text-orange-500">R</span>amprasath
          </h3>
          <p className="text-orange-500">Founder Position</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-black">
            Mr.<span className="text-orange-500">R</span>amprasath
          </h3>
          <p className="text-orange-500">Founder Position</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-black">
            Mr.<span className="text-orange-500">R</span>amprasath
          </h3>
          <p className="text-orange-500">Founder Position</p>
        </div>
      </Slide>
    </div>
  );
};

export default Founders;
