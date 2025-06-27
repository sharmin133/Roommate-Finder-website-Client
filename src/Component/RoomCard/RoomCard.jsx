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
    <div className="card bg-white dark:bg-gray-800 shadow-2xl mx-auto w-full max-w-md rounded-2xl transition-colors duration-300">
      <div className="card-body rounded-2xl">
        <div className="md:flex gap-3">
          <div>
            {/* Uncomment and adjust image if needed */}
            {/* <img src={room.photo} alt="" className="w-80 h-50 object-cover rounded-xl shadow-2xl"/> */}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-400">
              {title}
            </h2>
            <div className="flex justify-around items-center gap-1">
              <span>
                <IoLocationSharp size={16} fill="purple" />
              </span>
              <p className="text-cyan-900 dark:text-cyan-300 text-xl">{location}</p>
            </div>
            <div className="flex justify-around items-center gap-1">
              <span>
                <FaMoneyBill size={18} fill="green" />
              </span>
              <p className="text-xl text-gray-800 dark:text-gray-200">
                Rent: ${rentAmount}
              </p>
            </div>
            {/* Uncomment if you want to show roomType */}
            {/* <div className='flex justify-around items-center gap-1'>
              <span><FaHome size={18} fill='purple'/></span>
              <p className='text-xl text-amber-900 dark:text-amber-400'>{roomType}</p>
            </div> */}
            <div className="flex justify-around items-center gap-1">
              <span>
                <IoMdCheckmarkCircle size={16} fill="green" />
              </span>
              <p className="text-xl text-green-600 dark:text-green-400">{availability}</p>
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
            className="btn bg-yellow-400 text-white hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
