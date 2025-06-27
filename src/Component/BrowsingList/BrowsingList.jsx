import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const BrowsingList = () => {
  const rooms = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {rooms.map((room, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          {/* <img
            src={room.photo}
            alt={room.title}
            className="w-full h-48 object-cover"
          /> */}
          <div className="p-4">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{room.title}</h3>
            <p className="text-sm text-cyan-700 mb-1">Location: {room.location}</p>
            <p className="text-sm text-amber-800 mb-3">Rent: ${room.rentAmount}</p>

            <button
              onClick={() => {
                if (!user) {
                  navigate('/login', { state: { from: `/detailsData/${room._id}` } });
                } else {
                  navigate(`/detailsData/${room._id}`);
                }
              }}
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
            >
              See More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowsingList;
