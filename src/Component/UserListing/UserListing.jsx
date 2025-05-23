

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
        .then(data => setRooms(data))
        
    }
  }, [user]);

  const handleDeleteData=(_id)=>{
        console.log(_id)
        

        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  console.log(result.isConfirmed)
  if (result.isConfirmed) {

//start deleting data


fetch(`http://localhost:3000/roommates/${_id}`,{
  method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
 if(data.deletedCount){
  Swal.fire({
      title: "Deleted!",
      text: "Your list item has been deleted.",
      icon: "success"
    });

    const remainingData=rooms.filter(room=>room._id!==_id);
             setRooms(remainingData)
 }
})
    
  }
});
  }

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
            <tr key={index} className="bg-base-200">
              <td> <img src={room.photo} alt="" className="w-60 h-40 object-cover rounded-xl shadow-2xl"/></td>
              <td className='text-2xl font-bold text-blue-800'>{room.title}</td>
              <td className='text-cyan-800 text-xl'>{room.location}</td>
              <td className=' text-xl text-amber-800'>${room.rentAmount}</td>
              

              <td>
              <div className='flex gap-3'>
                <Link to={`/updateListing/${room._id}`}>
            
                  <button className='btn btn-primary'>Update</button>
                </Link>
                  <button className='btn btn-primary' onClick={()=>handleDeleteData(room._id)}>Delete</button></div>
              </td>

               
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UserListing;

