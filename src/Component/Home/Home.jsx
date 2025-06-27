import React from 'react';
import AutoPlay from '../AutoPlay/AutoPlay';
import { useLoaderData } from 'react-router';
import RoomCard from '../RoomCard/RoomCard';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import ReferBanner from '../ReferBanner/ReferBanner';
import Review from '../Review/Review';

const Home = () => {
  const rooms = useLoaderData();

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <Slide direction="down">
        <div><AutoPlay /></div>
      </Slide>

      <Fade cascade damping={0.2}>
        <div className="mt-10 bg-[#DDF6D2] dark:bg-gray-800 transition-colors duration-500">
          <h2 className="text-3xl md:text-5xl text-center font-bold text-emerald-800 dark:text-emerald-400 p-4">
           Meet Your Ideal Roommate Match
          </h2>
          <p className="text-xl text-center text-yellow-500 dark:text-yellow-400 p-4">
            Meet top roommate matches selected for trustworthiness, verified information, and a commitment to peaceful co-living
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {rooms.map(room => <RoomCard key={room._id} room={room} />)}
          </div>
        </div>
      </Fade>

     <Slide direction="left" triggerOnce>
  <ReferBanner />
</Slide>

 <Fade cascade damping={0.2} triggerOnce>
  <Review />
</Fade>

      <Zoom triggerOnce>
        <div className="mx-10 mt-10 shadow-sm bg-white dark:bg-gray-800 rounded-lg transition-colors duration-500 p-6">
          <h2 className="text-3xl md:text-5xl text-center font-bold text-emerald-800 dark:text-emerald-400 p-4">
            Know Before You Nest
          </h2>
          <p className="text-2xl text-center text-yellow-500 dark:text-yellow-400 mb-6">
            Common questions and helpful answers for new users.
          </p>

          <div className="collapse collapse-arrow bg-base-100 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg mb-3">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold dark:text-gray-200">How do I create an account?</div>
            <div className="collapse-content text-sm dark:text-gray-300">
              Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold dark:text-gray-200">Do I need to be logged in to post ?</div>
            <div className="collapse-content text-sm dark:text-gray-300">
              Yes, you must be logged in to create a post. This helps ensure that all interactions are secure and tied to a real user.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold dark:text-gray-200">Can I update my post later?</div>
            <div className="collapse-content text-sm dark:text-gray-300">
              Yes, you can easily update your post at any time. Just log into your account, go to the “My Listings” section, select the post you want to update, and click the “Update” button. Make your changes and save — your post will be updated instantly.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold dark:text-gray-200">Can I delete my post if I no longer need it?</div>
            <div className="collapse-content text-sm dark:text-gray-300">
              Absolutely. If you no longer need the post, go to your "My Listings" section and click the "Delete" button on the post you want to remove.
            </div>
          </div>
        </div>
      </Zoom>

      {/* Your commented Success Story section can also get similar dark mode styles if you want */}

    </div>
  );
};

export default Home;
