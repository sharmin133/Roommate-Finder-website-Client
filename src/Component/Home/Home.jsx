import React from 'react';
import AutoPlay from '../AutoPlay/AutoPlay';
import { useLoaderData } from 'react-router';
import RoomCard from '../RoomCard/RoomCard';

const Home = () => {

    const rooms=useLoaderData();
    console.log(rooms);
    return (
        <div>
            {/* <AutoPlay></AutoPlay> */}

            <div className='grid grid-cols-1 md:grid-cols-2'>

                {

                    rooms.map(room=> <RoomCard key={room._id}  room={room} ></RoomCard>)
                }
            </div>

           
        </div>
    );
};

export default Home;