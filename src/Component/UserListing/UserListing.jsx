import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { FaMoneyBill } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const UserListing = () => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://roommate-finder-website-server.vercel.app/roommates/email/${user.email}`)
        .then(res => res.json())
        .then(data => setRooms(data));
    }
  }, [user]);

  const handleDeleteData = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fbbf24",
      cancelButtonColor: "#db2777",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-website-server.vercel.app/roommates/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your listing has been deleted.", "success");
              const remaining = rooms.filter(room => room._id !== _id);
              setRooms(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-gray-800 shadow-2xl w-full max-w-4xl mx-auto rounded-2xl border border-pink-100 dark:border-pink-600 transition-colors"
          >
            <div className="card-body rounded-2xl">
              <div className="md:flex gap-4 items-center">
                {/* Image */}
                <img
                  src={room.photo}
                  alt={room.title}
                  className="w-80 h-48 object-cover rounded-xl shadow-xl"
                />

                {/* Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-blue-800 dark:text-blue-400">{room.title}</h2>

                  <div className="flex items-center gap-2 mt-2">
                    <IoLocationSharp className="text-pink-600" size={16} />
                    <span className="text-blue-900 dark:text-pink-300">{room.location}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <FaMoneyBill className="text-yellow-400" size={18} />
                    <span className="text-gray-800 dark:text-gray-200">
                      Rent: <span className="text-yellow-500">${room.rentAmount}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <IoMdCheckmarkCircle className="text-pink-500" size={16} />
                    <span className="text-pink-600 dark:text-pink-400">{room.availability || 'Available'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="card-actions justify-end mt-4">
                <Link to={`/updateListing/${room._id}`}>
                  <button className="btn bg-yellow-400 text-white hover:bg-pink-500 dark:hover:bg-pink-600 border-none shadow-md">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteData(room._id)}
                  className="btn bg-pink-600 text-white hover:bg-yellow-500 dark:hover:bg-yellow-400 border-none shadow-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListing;


