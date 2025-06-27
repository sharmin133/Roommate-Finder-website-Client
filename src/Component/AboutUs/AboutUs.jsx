import React from 'react';
import { FaRegHandshake, FaHome, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-800">About FlatFusion</h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        FlatFusion is a platform dedicated to helping people find the perfect roommates and shared living spaces. Whether you're a student, a working professional, or just looking for a peaceful place to stay, FlatFusion makes it easy to connect with trustworthy and compatible roommates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaUsers className="text-4xl mx-auto text-emerald-500 mb-2" />
          <h3 className="font-semibold text-lg">Verified Profiles</h3>
          <p className="text-sm text-gray-600">All users are verified to ensure a safe and genuine roommate finding experience.</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaHome className="text-4xl mx-auto text-yellow-500 mb-2" />
          <h3 className="font-semibold text-lg">Find Your Space</h3>
          <p className="text-sm text-gray-600">Browse available listings or post your own to connect with compatible housemates.</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaRegHandshake className="text-4xl mx-auto text-pink-500 mb-2" />
          <h3 className="font-semibold text-lg">Easy to Use</h3>
          <p className="text-sm text-gray-600">Our intuitive interface makes finding a roommate as simple and stress-free as possible.</p>
        </div>
      </div>

      <div className="bg-[#DDF6D2] p-6 rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-3 text-center">Our Mission</h2>
        <p className="text-gray-700 text-center">
          We aim to create a trustworthy and supportive community where people can safely find ideal living companions and share homes with confidence and peace of mind.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
