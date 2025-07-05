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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 p-6">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6">🎁 Your Bonus Card</h2>
      <p className="text-lg md:text-xl text-blue-700 mb-8 text-center max-w-lg">
        Click the box below to reveal your bonus credits!
      </p>

      <div
        onClick={handleOpenBox}
        className={`cursor-pointer rounded-xl p-12 flex items-center justify-center shadow-lg border-4 transition-transform duration-300 hover:scale-105
          ${
            opened
              ? 'bg-pink-100 border-pink-400'
              : 'bg-white border-yellow-400 text-yellow-600'
          }`}
      >
        {opened ? (
          <div className="text-center">
            <p className="text-2xl font-semibold text-blue-800">🎉 You earned {credits} credits!</p>
            <p className="text-sm text-blue-600 mt-2">They’ve been added to your account.</p>
          </div>
        ) : (
          <div className="text-center text-yellow-600">
            <FaGift size={60} />
            <p className="mt-3 font-semibold">Click to Open</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BonusCard;

