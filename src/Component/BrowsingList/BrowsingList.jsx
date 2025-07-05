import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaMoneyBill } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';

const BrowsingList = () => {
  const rooms = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [sortOrder, setSortOrder] = useState('asc');
  const [filterLocation, setFilterLocation] = useState('');

  const filteredRooms = rooms
    .filter(room =>
      filterLocation === '' ||
      room.location.toLowerCase().includes(filterLocation.toLowerCase())
    )
    .sort((a, b) => {
      return sortOrder === 'asc'
        ? a.rentAmount - b.rentAmount
        : b.rentAmount - a.rentAmount;
    });

  return (
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 min-h-screen">
      
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Filter by location"
          className="input input-bordered w-full md:w-1/3 border-pink-400 dark:border-pink-600 focus:ring-blue-400 dark:focus:ring-blue-300"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered w-full md:w-1/4 border-yellow-400 dark:border-yellow-600 focus:ring-blue-400 dark:focus:ring-blue-300"
        >
          <option value="asc">Sort by Rent: Low to High</option>
          <option value="desc">Sort by Rent: High to Low</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <div
              key={index}
              className="card bg-white dark:bg-gray-800 shadow-2xl w-full max-w-3xl mx-auto rounded-2xl border border-pink-100 dark:border-pink-600 transition-colors duration-300"
            >
              <div className="card-body rounded-2xl">
                <div className="md:flex gap-4">
                  {/* Image */}
                  <div>
                    <img
                      src={room.photo}
                      alt={room.title}
                      className="w-80 h-52 object-cover rounded-xl shadow-md"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                      <h2 className="text-xl md:text-xl font-bold text-blue-800 dark:text-blue-400">{room.title}</h2>

                      <div className="flex items-center gap-2 mt-2">
                        <IoLocationSharp size={16} className="text-pink-600" />
                        <p className="text-blue-900 dark:text-pink-300">{room.location}</p>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <FaMoneyBill size={18} className="text-yellow-400" />
                        <p className="text-gray-800 dark:text-gray-200">
                          Rent: <span className="text-yellow-500">${room.rentAmount}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <IoMdCheckmarkCircle size={16} className="text-pink-500" />
                        <p className="text-pink-600 dark:text-pink-400">{room.availability}</p>
                      </div>
                    </div>

                    {/* See More Button */}
                    <div className="mt-4 text-right">
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
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-blue-600 dark:text-pink-300 col-span-full">No rooms found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowsingList;



