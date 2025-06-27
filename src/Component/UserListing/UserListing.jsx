import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router'; 

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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {rooms.map((room, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          {/* {room.photo && (
            <img src={room.photo} alt={room.title} className="w-full h-48 object-cover" />
          )} */}
          <div className="p-4">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{room.title}</h3>
            <p className="text-sm text-cyan-700 mb-1">Location: {room.location}</p>
            <p className="text-sm text-amber-800 mb-3">Rent: ${room.rentAmount}</p>
            <div className="flex flex-wrap gap-2">
              <Link to={`/updateListing/${room._id}`}>
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-1 rounded">Update</button>
              </Link>
              <button
                onClick={() => handleDeleteData(room._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserListing;

