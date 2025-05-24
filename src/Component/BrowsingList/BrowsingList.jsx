import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { AuthContext } from '../Context/AuthContext';

const BrowsingList = () => {
  const rooms = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="overflow-x-auto p-2">
      <table className="table-fixed w-full text-sm md:text-base">
        <thead>
          <tr className="bg-amber-200 text-center">
            <th className="hidden md:table-cell">Photo</th>
            <th className="text-blue-800 font-bold md:text-2xl text-xl">Title</th>
            <th className="hidden md:table-cell text-cyan-800 md:text-2xl text-xl">Location</th>
            <th className="text-amber-800 md:text-2xl text-xl">Rent Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className="bg-gradient-to-r from-pink-100 to-pink-300 text-center">
              <td className="hidden md:table-cell px-2 py-2">
                <img
                  src={room.photo}
                  alt=""
                  className="w-60 h-40 object-cover rounded-xl mx-auto shadow-2xl"
                />
              </td>
              <td className="text-blue-800 font-bold px-2 py-2">{room.title}</td>
              <td className="hidden md:table-cell text-cyan-800 px-2 py-2">{room.location}</td>
              <td className="text-amber-800 px-2 py-2">${room.rentAmount}</td>
              <td className="px-2 py-2">
                <button
                  onClick={() => {
                    if (!user) {
                      navigate('/login', { state: { from: `/detailsData/${room._id}` } });
                    } else {
                      navigate(`/detailsData/${room._id}`);
                    }
                  }}
                  className="btn btn-sm btn-primary"
                >
                  See More
                </button>
                <Tooltip />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowsingList;
