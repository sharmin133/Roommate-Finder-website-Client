import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center py-8 px-6 bg-white rounded-xl shadow-lg max-w-lg mx-4">
        <div className="flex items-center justify-center mb-6">
          <img
            src="/AllPictures/error.jpg"
            alt="Error"
            className="max-w-full w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-lg sm:text-2xl font-medium text-pink-700 mb-6">
          Oops! The page you are looking for doesn't exist.
        </p>

        <button
          className="text-xl sm:text-3xl bg-yellow-400 hover:bg-yellow-500 font-bold rounded-3xl px-8 py-4 text-blue-900 transition"
          onClick={handleGoHome}
        >
          Go back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

