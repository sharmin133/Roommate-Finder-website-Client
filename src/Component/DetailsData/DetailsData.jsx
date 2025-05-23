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
      <h1 className='text-4xl text-green-800 text-center font-medium md:pb-20 md:pt-10 py-8 '>{like} people interested in Place</h1>
      </div>
 <div className="card bg-base-100 w-2/3 shadow-xl items-center  ">
  <div className="card-body">
  
   <div className='flex gap-3'>
     <div>
      <img src={room.photo} alt="" className="w-80 h-50 object-cover rounded-xl shadow-2xl"/>
    </div>
            <div>
              <h2 className='text-2xl font-bold text-blue-800'>{room.title}</h2>
                <p className='text-cyan-800 text-xl'>{room.location}</p>
              <p className=' text-xl text-amber-800'>${room.rentAmount}</p>
              <p className=' text-xl text-amber-800'>{room.roomType}</p>
              <p className=' text-xl text-amber-800'>{room.preference}</p>
               <p className=' text-xl text-amber-800'>{room.availability}</p>
              <p className=' text-xl text-amber-800 text-center'>{room.description}</p>
            </div>
   </div>
    <div className="card-actions justify-end">
     <button onClick={handleLike} className='btn btn-primary'>Like</button>
       {like > 0 && (
        <div>
          <strong>Contact: {room.contactInfo}</strong>
        </div>
      )}
    </div>
  </div>
</div>


</div>







  );
};

export default DetailsData;
