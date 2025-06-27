import React from 'react';
import AutoPlay from '../AutoPlay/AutoPlay';
import { useLoaderData } from 'react-router';
import RoomCard from '../RoomCard/RoomCard';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { Fade, Slide, Zoom} from 'react-awesome-reveal';
import ReferBanner from '../ReferBanner/ReferBanner';
import Review from '../Review/Review';


const Home = () => {

    const rooms=useLoaderData();
    // console.log(rooms);
    return (
        <div>
            
    
         <Slide direction="down">
  <div><AutoPlay /></div>
</Slide>



             <Fade cascade damping={0.2}>
          <div className='mt-10 bg-[#DDF6D2] '>
            <h2 className='md:text-5xl text-xl text-center font-bold text-blue-800 p-4'>Meet Your Ideal Roommate Match </h2>
            <p className='text-xl text-center text-yellow-500 p-4'>Meet top roommate matches selected for trustworthiness, verified information, and a commitment to peaceful co-living</p>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4 '>

                {

                    rooms.map(room=> <RoomCard key={room._id}  room={room} ></RoomCard>)
                }
            </div>
          </div>
              </Fade>

<ReferBanner></ReferBanner>

<Review></Review>


<Zoom triggerOnce>
           <div className=' mx-10 mt-10 shadow-sm'>
            <h2 className=' text-3xl  md:text-5xl text-center font-bold text-emerald-800 p-4'>Know Before You Nest </h2>
            <p className=' text-2xl text-center text-yellow-500'>Common questions and helpful answers for new users.</p>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Do I need to be logged in to post ?</div>
  <div className="collapse-content text-sm">Yes, you must be logged in to create a post. This helps ensure that all interactions are secure and tied to a real user.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold"> Can I update my post later?</div>
  <div className="collapse-content text-sm">Yes, you can easily update your post at any time. Just log into your account, go to the “My Listings” section, select the post you want to update, and click the “Update” button. Make your changes and save — your post will be updated instantly.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Can I delete my post if I no longer need it?</div>
  <div className="collapse-content text-sm">Absolutely. If you no longer need the post, go to your "My Listings" section and click the "Delete" button on the post you want to remove.</div>
</div>

            </div>
            </Zoom>



{/* <Fade direction="up" cascade>
            <div className='mt-10  shadow-sm bg-[#CAE8BD]'>
 <h2 className='text-3xl md:text-5xl text-center font-bold text-blue-800 p-4  '>Success Story </h2>

<div className='grid grid-cols-1 md:grid-cols-3 mt-10 md:ml-15 gap-3'>

    <div className="card w-96 shadow-sm rounded-2xl border-amber-300 border-2 bg-pink-200">
  
  <div className="card-body items-center text-center">
    <h2 className='font-bold text-2xl text-amber-500'>Sumaiya Rahman</h2>
    <p className='font-semibold text-xl'>2nd Year Student, University of Dhaka</p>
    <p ><BiSolidQuoteAltLeft size={30} fill='green' /></p>
    <p className='text-xl'>FlatFusion made it super easy to find a roommate near my campus.I found someone with the same study habits and lifestyle as mine!</p>
    
  </div>
</div>


<div className="card w-96 shadow-sm rounded-2xl border-amber-300 border-2 bg-pink-200">
  
  <div className="card-body items-center text-center">
    <h2 className='font-bold text-2xl text-amber-500'>Simi Jannat</h2>
    <p className='font-semibold text-xl'>1st Year Student, BUET</p>
    <p ><BiSolidQuoteAltLeft size={30} fill='green' /></p>
    <p className='text-xl'>FlatFusion's roommate matching made the whole process stress-free. It’s so much better than going through dozens of random listings.</p>
    
  </div>
</div>



<div className="card w-96 shadow-sm rounded-2xl border-amber-300 border-2 bg-pink-200">
  
  <div className="card-body items-center text-center">
    <h2 className='font-bold text-2xl text-amber-500'>Farhan Rahman</h2>
    <p className='font-semibold text-xl'>Final Year Student, North South University</p>
    <p ><BiSolidQuoteAltLeft size={30} fill='green' /></p>
    <p className='text-xl'>FlatFusion provided a seamless experience in finding a compatible roommate. The platform's transparency and user-friendly interface gave me the confidence to make the right choice</p>
    
  </div>
</div>
</div>



            </div>

           </Fade> */}
        </div>
    );
};

export default Home;