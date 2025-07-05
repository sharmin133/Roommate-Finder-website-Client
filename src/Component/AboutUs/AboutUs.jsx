import React from 'react';
import { FaRegHandshake, FaHome, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 transition-colors duration-500' >
      <div className="max-w-6xl mx-auto p-6  space-y-8
      
      
      transition-colors duration-300"
    >
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-800 dark:text-yellow-400">
        About FlatFusion
      </h1>

      {/* Intro paragraph */}
      <p className="text-blue-700 dark:text-yellow-200 text-center max-w-3xl mx-auto">
        FlatFusion is a platform dedicated to helping people find the perfect roommates and shared living spaces. Whether you're a student, a working professional, or just looking for a peaceful place to stay, FlatFusion makes it easy to connect with trustworthy and compatible roommates.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

        <div className="p-6 
          bg-yellow-100 dark:bg-yellow-900 
          border-2 border-yellow-400 dark:border-yellow-600 
          rounded-lg shadow-md transition-colors duration-300"
        >
          <FaUsers className="text-4xl mx-auto text-yellow-500 dark:text-yellow-300 mb-2" />
          <h3 className="font-semibold text-lg text-blue-800 dark:text-yellow-300">Verified Profiles</h3>
          <p className="text-blue-700 dark:text-yellow-200">
            All users are verified to ensure a safe and genuine roommate finding experience.
          </p>
        </div>

        <div className="p-6 
          bg-pink-100 dark:bg-pink-900 
          border-2 border-pink-400 dark:border-pink-600 
          rounded-lg shadow-md transition-colors duration-300"
        >
          <FaHome className="text-4xl mx-auto text-pink-500 dark:text-pink-300 mb-2" />
          <h3 className="font-semibold text-lg text-blue-800 dark:text-pink-300">Find Your Space</h3>
          <p className="text-blue-700 dark:text-pink-200">
            Browse available listings or post your own to connect with compatible housemates.
          </p>
        </div>

        <div className="p-6 
          bg-blue-100 dark:bg-blue-800 
          border-2 border-blue-400 dark:border-blue-600 
          rounded-lg shadow-md transition-colors duration-300"
        >
          <FaRegHandshake className="text-4xl mx-auto text-blue-600 dark:text-blue-300 mb-2" />
          <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-300">Easy to Use</h3>
          <p className="text-blue-700 dark:text-blue-200">
            Our intuitive interface makes finding a roommate as simple and stress-free as possible.
          </p>
        </div>

      </div>

      {/* Mission section */}
      <div className="bg-gray-200 dark:bg-gray-900 border-2 border-blue-400 dark:border-yellow-400 p-6 rounded-xl shadow-md mt-10 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-blue-800 dark:text-yellow-300 mb-3 text-center">
          Our Mission
        </h2>
        <p className="text-blue-700 dark:text-yellow-200 text-center">
          We aim to create a trustworthy and supportive community where people can safely find ideal living companions and share homes with confidence and peace of mind.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
