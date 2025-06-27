import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { FaHome, FaMoneyBill, FaSmoking } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';

const DetailsData = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(room.likes || 0);

  const handleLike = () => {
    if (user?.email === room.email) {
      toast.error("You can't like your own post");
      return;
    }

    fetch(`https://roommate-finder-website-server.vercel.app/roommates/${room._id}`, {
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
  

    <div className=' flex flex-col items-center justify-center bg-gray-50 px-4'>
       <ToastContainer position="top-center" ></ToastContainer>
<div>
      <h1 className='text-4xl text-green-800 text-center font-medium md:pb-20 md:pt-10 py-8 '>{like} people interested in Place</h1>
      </div>
 <div className="card bg-base-100 w-2/3 shadow-xl items-center  ">
  <div className="card-body">
  
   <div className='md:flex gap-3'>
     <div>
      {/* <img src={room.photo} alt="" className="w-80 h-50 object-cover rounded-xl shadow-2xl"/> */}
    </div>
            <div>
              <h2 className='text-2xl font-bold text-blue-800'>{room.title}</h2>
                              <div className='flex  justify-around items-center gap-1'><span><IoLocationSharp  size={16} fill='purple'  /></span><p className='text-cyan-900 text-xl'>{room.location}</p></div>
                            <div className='flex  justify-around items-center gap-1'><span><FaMoneyBill size={18} fill='green' /></span><p className=' text-xl '>Rent: ${room.rentAmount}</p></div>
                           <div  className='flex  justify-around items-center gap-1'><span><FaHome   size={18} fill='purple'/></span> <p className=' text-xl text-amber-900 '>{room.roomType}</p></div>
                            <div className='flex  justify-around items-center gap-1'><span><IoMdCheckmarkCircle size={16} fill='green' /></span> <p className=' text-xl text-green-600'>{room.availability}</p></div>
            <div className='flex  justify-around items-center gap-1'> <span><FaSmoking  size={16} fill='red' /></span> <p className=' text-xl text-blue-700'>{room.preference}</p></div>
              
              <p className=' text-xl text-amber-800 text-center'>{room.description}</p>
            </div>
   </div>
    <div className="card-actions justify-end ">
     <div className='flex flex-col gap-2'><button onClick={handleLike} className='btn bg-yellow-400'> Like<AiOutlineLike size={20} /></button>
      <div> {like > 0 && (
        <div>
          <strong>Contact: {room.contactInfo}</strong>
        </div>
      )}</div></div>
    </div>
  </div>
</div>


</div>







  );
};

export default DetailsData;
