
      {/* <img src={room.photo} alt="" className="w-80 h-50 object-cover rounded-xl shadow-2xl"/> */}
   import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { FaHome, FaMoneyBill, FaSmoking } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';

const DetailsData = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(room.likes || 0);

  const handleLike = () => {
    if (user?.email === room.email) {
      toast.error("You can't like your own post");
      return;
    }

    fetch(`https://roommate-finder-website-server.vercel.app/roommates/${room._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes: like + 1 }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setLike(prev => prev + 1);
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-10 transition-colors duration-500">
      <ToastContainer position="top-center" />

      <h1 className="text-4xl text-blue-800 dark:text-blue-400 text-center font-semibold pb-10">
        {like} people interested in Place
      </h1>

      <div className="card bg-white dark:bg-gray-800 w-full md:w-2/3 shadow-xl rounded-xl p-6">
        <div className="card-body">
          <div className="md:flex gap-6">
            <div><img src={room.photo} alt="" className="w-80 h-50 object-cover rounded-xl shadow-2xl"/> </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400">{room.title}</h2>

              <div className="flex items-center gap-2 mt-2">
                <IoLocationSharp size={18} className="text-pink-600" />
                <p className="text-blue-900 dark:text-pink-300 text-lg">{room.location}</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <FaMoneyBill size={18} className="text-yellow-400" />
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  Rent: <span className="text-yellow-500">${room.rentAmount}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <FaHome size={18} className="text-pink-600" />
                <p className="text-lg text-pink-600 dark:text-pink-400">{room.roomType}</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <IoMdCheckmarkCircle size={18} className="text-pink-500" />
                <p className="text-lg text-pink-600 dark:text-pink-400">{room.availability}</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <FaSmoking size={18} className="text-blue-700" />
                <p className="text-lg text-blue-700 dark:text-blue-400">{room.preference}</p>
              </div>

              <p className="mt-4 text-lg text-yellow-600 dark:text-yellow-400 text-center">
                {room.description}
              </p>
            </div>
          </div>

          <div className="card-actions justify-end mt-6">
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={handleLike}
                className="btn bg-yellow-400 text-white hover:bg-pink-500 dark:hover:bg-pink-600 border-none"
              >
                Like <AiOutlineLike size={20} />
              </button>
              {like > 0 && (
                <p className="text-pink-600 dark:text-pink-300 font-semibold">
                  Contact: {room.contactInfo}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsData;
