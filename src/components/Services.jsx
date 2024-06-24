import React from 'react';
import Slide from "./Slide";

// Importing the GIF files
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.gif';
import gif4 from '../assets/gif4.gif';
import gif5 from '../assets/gif5.gif';
import gif6 from '../assets/gif6.gif';

const projectTexts = [
  "Construction Project ",
  "Modern Building Design",
  "Renovation Project",
  "Eco-Friendly Construction",
  "Luxury Apartments",
  "Commercial Complex"
];

const Services = () => {
  return (
    <div id="services" className="py-16 bg-white-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Our Services</h2>
        <Slide delay ={0.3}>
        <p className="mt-4 text-gray-600">
          Discover our latest and greatest construction projects...
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[gif1, gif2, gif3, gif4, gif5, gif6].map((gif, index) => (
            <div key={index} className="bg-gray-100 p-4 shadow-md rounded-md flex flex-col justify-center items-center">
              <img src={gif} alt={`Project ${index + 1}`} className="mx-auto p-4" />
              <div className="w-1/2 border-t border-orange-400 mt-2 p-3"></div>
              <p className="text-orange-500 mt-2">{projectTexts[index]}</p>
        
        
            </div>
          ))}
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default Services;


