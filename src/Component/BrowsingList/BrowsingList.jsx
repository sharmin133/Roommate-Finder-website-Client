import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowsingList = () => {
    const rooms=useLoaderData();
    console.log(rooms)
    return (
        <div>
         <div className="">
      <table className="table">
        <thead>
          <tr className='bg-amber-300'>
            <th></th>
            <th className='text-2xl font-bold text-blue-800'>Title</th>
            <th className='text-2xl text-cyan-800'>Location</th>
            <th className='text-2xl text-amber-800'>Rent Amount</th>
            <th></th>
           
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className=" bg-linear-to-r from-cyan-50 to-blue-100  ">
              <td> <img src={room.photo} alt="" className="w-60 h-40 object-cover rounded-xl shadow-2xl"/></td>
              <td className='text-2xl font-bold text-blue-800'>{room.title}</td>
              <td className='text-cyan-800 text-xl'>{room.location}</td>
              <td className=' text-xl text-amber-800'>${room.rentAmount}</td>
              <td>
                <Link to={`/detailsData/${room._id}`} >
                  <button className='btn btn-primary'>See More</button>
                </Link>
              </td>

               
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default BrowsingList;