import React, { useState } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';
import './Reviews.css'; // Import your custom styles
import Slide from "./Slide"
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';


const reviews = [
  {
    name: "John Doe",
    profilePic: profile1,
    feedback: "Great service and friendly staff!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    profilePic: profile2,
    feedback: "Highly recommend, very professional.",
    rating: 4,
  },
  {
    name: "Sam Wilson",
    profilePic: profile4,
    feedback: "Amazing experience, will come back again.",
    rating: 5,
  },
  {
    name: "Lisa Wong",
    profilePic: profile3,
    feedback: "Good quality work and timely delivery.",
    rating: 4,
  },
  {
    name: "Paul Taylor",
    profilePic: profile1,
    feedback: "Very satisfied with the service.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    profilePic: profile2,
    feedback: "Fantastic results and great support.",
    rating: 5,
  },
];

const Reviews = () => {
  const [likeCounts, setLikeCounts] = useState(Array(reviews.length).fill(0));

  const handleLikeClick = (index) => {
    const newLikeCounts = [...likeCounts];
    newLikeCounts[index] += 1;
    setLikeCounts(newLikeCounts);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Slide delay={0.3}>
        <div className="flex flex-wrap -mx-2">
          {reviews.map((review, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={review.profilePic}
                    alt={`${review.name}'s profile`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                </div>
                <p className="text-gray-700 flex-grow">{review.feedback}</p>
                <div className="flex items-center mt-4">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => handleLikeClick(index)}
                    className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 flex items-center justify-center"
                  >
                    <FaHeart className="mr-2" />
                    {likeCounts[index]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default Reviews;
