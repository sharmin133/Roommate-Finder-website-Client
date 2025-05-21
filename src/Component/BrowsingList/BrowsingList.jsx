import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowsingList = () => {
    const rooms=useLoaderData();
    console.log(rooms)
    return (
        <div>
         <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Rent Amount</th>
            <th>Room Type</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className="bg-base-200">
              <td>{room.title}</td>
              <td>{room.location}</td>
              <td>{room.rentAmount}</td>
              <td>{room.roomType}</td>
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