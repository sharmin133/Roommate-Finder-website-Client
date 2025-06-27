import React, { useState } from 'react';
import { FaGift } from 'react-icons/fa';

const BonusCard = () => {
  const [opened, setOpened] = useState(false);
  const [credits, setCredits] = useState(0);

  const handleOpenBox = () => {
    if (!opened) {
      setOpened(true);
      setCredits(100); // Simulate credit reward
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 p-4">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">🎁 Your Bonus Card</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6">Click the box below to reveal your bonus credits!</p>

      <div
        onClick={handleOpenBox}
        className={`cursor-pointer bg-white shadow-md border-2 border-yellow-400 rounded-xl p-10 flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
          opened ? 'bg-green-100' : ''
        }`}
      >
        {opened ? (
          <div className="text-center">
            <p className="text-xl font-semibold text-green-700">🎉 You earned {credits} credits!</p>
            <p className="text-sm text-gray-600 mt-2">They’ve been added to your account.</p>
          </div>
        ) : (
          <div className="text-center text-yellow-500">
            <FaGift size={50} />
            <p className="mt-2 font-semibold">Click to Open</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BonusCard;
