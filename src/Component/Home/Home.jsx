import React from 'react';
import AutoPlay from '../AutoPlay/AutoPlay';
import { useLoaderData } from 'react-router';
import RoomCard from '../RoomCard/RoomCard';
import { Slide, Fade, Zoom } from 'react-awesome-reveal';
import ReferBanner from '../ReferBanner/ReferBanner';
import Review from '../Review/Review';

const Home = () => {
  const rooms = useLoaderData();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <Slide direction="down">
        <AutoPlay />
      </Slide>

      <Fade cascade damping={0.2}>
        <div className="py-10">
          <h2 className="text-3xl md:text-5xl text-center font-bold text-blue-800 dark:text-blue-400">
            Meet Your Ideal Roommate Match
          </h2>
          <p className="text-xl text-center text-pink-600 dark:text-yellow-400 p-4">
            Meet top roommate matches selected for trustworthiness, verified information, and a commitment to peaceful co-living
          </p>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-6 p-4">
            {rooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
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
        <div className="py-12">
           <h2 className="text-3xl md:text-5xl text-center font-bold text-blue-800 dark:text-blue-400">Know Before You Nest</h2>
      

          <div className="mx-10 mt-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow bg-white dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg mb-3"
              >
                <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                <div className="collapse-title font-semibold dark:text-white text-blue-900">
                  {faq.question}
                </div>
                <div className="collapse-content text-sm dark:text-gray-300">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Zoom>
    </div>
  );
};

const faqList = [
  {
    question: 'How do I create an account?',
    answer: 'Click the "Sign Up" button in the top right corner and follow the registration process.'
  },
  {
    question: 'Do I need to be logged in to post?',
    answer:
      'Yes, you must be logged in to create a post. This helps ensure that all interactions are secure and tied to a real user.'
  },
  {
    question: 'Can I update my post later?',
    answer:
      'Yes, you can easily update your post at any time. Just log into your account, go to the "My Listings" section, select the post you want to update, and click the "Update" button. Make your changes and save — your post will be updated instantly.'
  },
  {
    question: 'Can I delete my post if I no longer need it?',
    answer:
      'Absolutely. If you no longer need the post, go to your "My Listings" section and click the "Delete" button on the post you want to remove.'
  }
];

export default Home;
