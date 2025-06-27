import React from 'react';
import { useNavigate } from 'react-router';

const ReferBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/bonus');
  };

  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center text-white relative"
   style={{
  backgroundImage: `url("https://i.ibb.co/84SV31Nc/discountbanner.jpg")`,
}}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl   text-blue-800 font-bold mb-4">💸 Refer a Friend & Earn Credits!</h2>
        <p className="text-lg md:text-xl text-blue-600 mb-6">Invite your friends and get 100 credits for each successful signup.</p>
        <button
          onClick={handleClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition"
        >
          Claim Your Bonus
        </button>
      </div>
    </div>
  );
};

export default ReferBanner;
