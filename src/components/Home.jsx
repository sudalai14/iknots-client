import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import build1 from '../assets/build1.png';
import build2 from '../assets/build2.png';
import build3 from '../assets/build3.png';
import build4 from '../assets/build4.png';

const images = [build1, build2, build3, build4];

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sliderRef = useRef(null);

  return (
    <div className="relative h-screen flex flex-col items-center bg-gray-300 overflow-hidden font-batangas">
      {/* Background Image Slider */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="slider" ref={sliderRef}>
          {images.concat(images).map((img, index) => (
            <div
              key={index}
              className="slide bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${img}) `}}
            ></div>
          ))}
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/3 bg-white z-50 transform transition-transform duration-500 ${
          showSidebar ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 bg-gray-200">
            <div className="bg-white p-2 rounded shadow-md flex items-center justify-between w-full">
              <span className="text-base font-bold">MENU</span>
              <FaTimes
                className="text-base cursor-pointer"
                onClick={() => setShowSidebar(false)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">       
            <Link
              to="aboutus"
              smooth={true}
              duration={500}
              className="text-4xl font-bold text-gray-800 hover:text-orange-500 cursor-pointer"
              onClick={() => setShowSidebar(false)}
            >
              ABOUT US
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-4xl font-bold text-gray-800 hover:text-orange-500 cursor-pointer"
              onClick={() => setShowSidebar(false)}
            >
              PROJECTS
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-4xl font-bold text-gray-800 hover:text-orange-500 cursor-pointer"
              onClick={() => setShowSidebar(false)}
            >
              SERVICES
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-4xl font-bold text-gray-800 hover:text-orange-500 cursor-pointer"
              onClick={() => setShowSidebar(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation for Desktop */}
      <div className="hidden md:flex w-full bg-white text-black p-4 fixed top-0 z-10 justify-between items-center">
        <div className="flex items-center space-x-2" style={{ marginTop: '-4px' }}>
          <img src={logo} alt="Company Logo" className="w-20" />
          <div className="text-center text-orange-500 leading-none">
            <h1 className="font-bold text-xl">MARK</h1>
            <p className="text-sl" style={{ fontSize: '0.6rem', width: '3.5rem', margin: '0' }}>Constructions</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="aboutus"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 cursor-pointer"
          >
            ABOUT US
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 cursor-pointer"
          >
            PROJECTS
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 cursor-pointer"
          >
            SERVICES
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 cursor-pointer"
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Left Card for Mobile */}
      <div className="bg-white p-2 absolute top-0 left-0 w-1/2 sm:w-1/4 h-20 sm:h-24 md:h-28 flex items-center justify-center space-x-2 md:space-x-4 z-10 md:hidden">
        <img src={logo} alt="Company Logo" className="w-14 sm:w-16 md:w-20" />
        <div className="text-center text-orange-500 leading-none">
          <h1 className="font-bold text-xl">MARK</h1>
          <p className="text-sl" style={{ fontSize: '0.8rem', width: '3.5rem', margin: '0' }}>Construction</p>
        </div>
      </div>

      {/* Right Card for Mobile */}
      <div className="bg-white p-2 absolute top-0 right-0 w-1/2 sm:w-1/4 h-20 sm:h-24 md:h-28 flex items-center justify-center space-x-4 md:space-x-6 z-10 md:hidden">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="cursor-pointer flex items-center"
        >
          <span className="text-xs sm:text-sm md:text-base font-bold mr-4">MENU</span>
          <FaBars className="text-xs sm:text-sm md:text-base" />
        </div>
      </div>

      {/* A Civil Aspirants Touch */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <p className="text-4xl font-bold text-black">A Civil Aspirants</p>
        <p className="text-6xl font-bold text-black animate-bounce">Touch</p>
      </div>

      {/* CSS for Slider */}
      <style>
        {`
          .slider {
            display: flex;
            width: 200%;
            height: 100%;
            animation: slide 16s linear infinite; /* Speed up animation */
          }

          .slide {
            flex: 0 0 25%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }

          @keyframes slide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            .slider {
              animation-duration: 12s; /* Speed up animation further for smaller screens */
            }
          }

          @media (max-width: 480px) {
            .slider {
              animation-duration: 8s; /* Speed up animation for mobile screens */
            }
            .slide {
              flex: 0 0 100%;
            }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }

          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
