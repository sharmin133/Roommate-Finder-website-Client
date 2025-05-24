import React from 'react';
import { FaHome, FaMoneyBill } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import {  IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const RoomCard = ({room}) => {

    const {title,location,rentAmount,roomType,availability}=room;
    return (
       <div className="card bg-base-100 w-3/4 shadow-2xl m-4 ">
  <div className="card-body bg-linear-to-r from-cyan to-blue-100 rounded-2xl">
  <div className='flex gap-3'>
     <div>
      {/* <img src={room.photo} alt="" className="w-80 h-50 object-cover rounded-xl shadow-2xl"/> */}
    </div>
            <div>
              <h2 className='text-2xl font-bold text-blue-800'>{title}</h2>
                <div className='flex  justify-around items-center gap-1'><span><IoLocationSharp  size={16} fill='purple'  /></span><p className='text-cyan-900 text-xl'>{location}</p></div>
              <div className='flex  justify-around items-center gap-1'><span><FaMoneyBill size={18} fill='green' /></span><p className=' text-xl '>Rent: ${rentAmount}</p></div>
             <div  className='flex  justify-around items-center gap-1'><span><FaHome   size={18} fill='purple'/></span> <p className=' text-xl text-amber-900 '>{roomType}</p></div>
              <div className='flex  justify-around items-center gap-1'><span><IoMdCheckmarkCircle size={16} fill='green' /></span> <p className=' text-xl text-green-600'>{availability}</p></div>
            </div>
   </div>
    <div className="card-actions justify-end">
      <Link to={`/detailsData/${room._id}`} >
                  <button className='btn btn-primary'>See More</button>
                
                </Link>
    </div>
  </div>
</div>









    );
};

export default RoomCard;