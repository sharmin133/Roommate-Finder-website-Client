import React from 'react';
import { useLoaderData } from 'react-router';



const DetailsData = () => {
const room=useLoaderData();
 
    return (
        <div>

            <p>this is </p>
            <h2>{room.title}</h2>
            <p>{room.location}</p>
        </div>
    );
};

export default DetailsData;