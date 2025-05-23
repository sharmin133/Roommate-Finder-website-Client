import React from 'react';
import { Link } from 'react-router';

const RoomCard = ({room}) => {

    const {title,location,description,rentAmount,roomType,availability}=room;
    return (
       <div className="card bg-base-100 w-2/3 shadow-sm">
  <div className="card-body">
  <div className='flex gap-3'>
     <div>
      <img src={room.photo} alt="" className="w-80 h-50 object-cover rounded-xl shadow-2xl"/>
    </div>
            <div>
              <h2 className='text-2xl font-bold text-blue-800'>{title}</h2>
                <p className='text-cyan-800 text-xl'>{location}</p>
              <p className=' text-xl text-amber-800'>${rentAmount}</p>
              <p className=' text-xl text-amber-800'>{roomType}</p>
               <p className=' text-xl text-amber-800'>{availability}</p>
              <p className=' text-xl text-amber-800 text-center'>{description}</p>
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