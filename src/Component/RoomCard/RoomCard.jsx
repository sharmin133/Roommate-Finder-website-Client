import React from 'react';

const RoomCard = ({room}) => {

    const {title,location,description}=room;
    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{location}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
    );
};

export default RoomCard;