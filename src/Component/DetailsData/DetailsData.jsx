import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const DetailsData = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(room.likes || 0);

  const handleLike = () => {
    if (user?.email === room.email) {
      toast.error("You can't like your own post");
      return;
    }

    fetch(`http://localhost:3000/roommates/${room._id}`, {
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
    <div>
        <ToastContainer position="top-center" ></ToastContainer>
      <div>
        <h1>{like} people interested in</h1>
      </div>

      <h2>{room.title}</h2>
      <p>{room.location}</p>

      <button onClick={handleLike} className='btn btn-primary'>Like</button>

      {like > 0 && (
        <div>
          <strong>Contact: {room.contactInfo}</strong>
        </div>
      )}
    </div>
  );
};

export default DetailsData;
