import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { FaUser, FaEnvelope, FaListUl, FaClipboardList } from 'react-icons/fa';

const Overview = () => {
  const { user } = useContext(AuthContext);

  const [totalCount, setTotalCount] = useState(0);
  const [myCount, setMyCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://roommate-finder-website-server.vercel.app/roommates')
      .then(res => res.json())
      .then(data => setTotalCount(data.length))
      .catch(err => console.error(err));

    if (user?.email) {
      fetch(`https://roommate-finder-website-server.vercel.app/roommates/email/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyCount(data.length);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <p className="text-center mt-10 text-pink-500">Loading dashboard overview...</p>;
  }

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-900 transition-colors duration-500 min-h-screen">
      <h1 className="text-3xl font-extrabold text-blue-800 dark:text-blue-400 mb-6 text-center">
        Welcome to Your Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Logged-in User Info Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-pink-100 dark:border-pink-600">
          <h2 className="text-xl font-semibold text-blue-700 dark:text-pink-300 mb-6 flex items-center gap-2">
            <FaUser /> Logged In User
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-gray-600 dark:text-pink-200 font-medium">
                <FaUser />
                <span>Name</span>
              </div>
              <span className="font-semibold text-blue-900 dark:text-pink-100">{user?.displayName || 'N/A'}</span>
            </div>

            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-gray-600 dark:text-pink-200 font-medium">
                <FaEnvelope />
                <span>Email</span>
              </div>
              <span className="font-semibold text-blue-900 dark:text-pink-100">{user?.email}</span>
            </div>
          </div>
        </div>

        {/* Stats Summary Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-200 dark:border-yellow-600">
          <h2 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-6 flex items-center gap-2">
            <FaListUl /> Stats Summary
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
                <FaClipboardList />
                <span>Total Listings</span>
              </div>
              <span className="font-semibold text-blue-700 dark:text-blue-300">{totalCount}</span>
            </div>

            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
                <FaClipboardList />
                <span>My Listings</span>
              </div>
              <span className="font-semibold text-pink-600 dark:text-pink-400">{myCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;


