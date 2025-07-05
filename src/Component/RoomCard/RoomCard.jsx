
         import React, { useContext } from 'react';
import { FaHome, FaMoneyBill } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const RoomCard = ({ room }) => {
  const { title, location, rentAmount, availability } = room;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="card bg-white dark:bg-gray-800 shadow-2xl mx-auto w-full max-w-md rounded-2xl transition-colors duration-300 border border-pink-100 dark:border-pink-600">
      <div className="card-body rounded-2xl">
        <div className="md:flex gap-3">
        <div>
         
             <img src={room.photo} alt="" className="w-80 h-50 object-cover rounded-xl shadow-2xl"/> </div> 
          <div>
            <h2 className="text-xl md:text-xl font-bold text-blue-800 dark:text-blue-400">
              {title}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <IoLocationSharp size={16} className="text-pink-600" />
              <p className="text-blue-900 dark:text-pink-300 ">{location}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaMoneyBill size={18} className="text-yellow-400" />
              <p className=" text-gray-800 dark:text-gray-200">
                Rent: <span className="text-yellow-500">${rentAmount}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <IoMdCheckmarkCircle size={16} className="text-pink-500" />
              <p className=" text-pink-600 dark:text-pink-400">{availability}</p>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => {
              if (!user) {
                navigate('/login', { state: { from: `/detailsData/${room._id}` } });
              } else {
                navigate(`/detailsData/${room._id}`);
              }
            }}
            className="btn bg-yellow-400 text-white hover:bg-pink-500 dark:hover:bg-pink-600 border-none shadow-md"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
