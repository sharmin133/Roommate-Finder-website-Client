import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const UserListing = () => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/roommates/email/${user.email}`)
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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/roommates/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your list item has been deleted.",
                icon: "success"
              });
              const remainingData = rooms.filter(room => room._id !== _id);
              setRooms(remainingData);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto p-2">
      <table className="table-fixed w-full text-sm md:text-base">
        <thead>
          <tr className="bg-amber-300 text-center">
            <th className="hidden md:table-cell">Photo</th>
            <th className="text-blue-800 font-bold md:text-2xl text-xl">Title</th>
            <th className="hidden md:table-cell text-cyan-800 md:text-2xl text-xl">Location</th>
            <th className="text-amber-800 md:text-2xl text-xl">Rent Amount</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className="bg-base-200 text-center">
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
                <div className="flex flex-col md:flex-row gap-2 justify-center">
                  <Link to={`/updateListing/${room._id}`}>
                    <button className="btn btn-sm btn-primary w-full md:w-auto">Update</button>
                  </Link>
                  <button
                    className="btn btn-sm btn-primary w-full md:w-auto"
                    onClick={() => handleDeleteData(room._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListing;

