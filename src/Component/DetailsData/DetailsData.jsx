import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';



const DetailsData = () => {
const room=useLoaderData();
    const[like,setLike]=useState(0);

    const handleLike =()=>{
        setLike(count=>count+1)
    }

 
    return (
        <div>
            <div>
                <h1>
                    {like} people interested in
                </h1>
            </div>

            <p>this is </p>
            <h2>{room.title}</h2>
            <p>{room.location}</p>


            <div><button onClick={handleLike} className='btn btn-primary'>Like</button></div>

            {
                like >0 && (
                    <div>
                        <strong>contact: {room.contactInfo}</strong>
                    </div>
                )
            }
        </div>
    );
};

export default DetailsData;