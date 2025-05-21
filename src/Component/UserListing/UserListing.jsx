// UserListing.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const UserListing = () => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (user?.email) {
     fetch(`http://localhost:3000/roommates/email/${user.email}`)
        .then(res => res.json())
        .then(data => setRooms(data))
        
    }
  }, [user]);

  return (
    <div>
      <h2>My Listings</h2>
      {rooms.length > 0 ? (
        rooms.map((room, index) => (
          <div key={index}>
            <h3>{room.title}</h3>
            <p>Location: {room.location}</p>
            <p>Rent: {room.rentAmount}</p>
            <p>Type: {room.roomType}</p>
          </div>
        ))
      ) : (
        <p>No listings found.</p>
      )}
    </div>
  );
};

export default UserListing;

