import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    displayName: '',
    email: '',
    photoURL: ''
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setProfile({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();

    if (!name || !photo) {
      toast.error('Both Name and Photo URL are required.');
      return;
    }

    const updatedProfile = {
      displayName: name,
      photoURL: photo,
    };

    updateProfile(auth.currentUser, updatedProfile)
      .then(() => {
        setProfile((prev) => ({
          ...prev,
          displayName: name,
          photoURL: photo,
        }));
        toast.success('Profile Updated Successfully!');
      })
      .catch((error) => {
        toast.error('Failed to update profile.');
        console.error(error.message);
      });
  };

  return (
    <div className="py-10 px-4 md:px-20">
      <ToastContainer position="top-center" autoClose={3000} />

      <h1 className="text-4xl font-extrabold text-center text-violet-700 mb-10 drop-shadow-md">
        Your Profile Details
      </h1>

      {/* Responsive flex container for profile and update form */}
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
        {/* User Info Card */}
        <div className="flex-1 max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">
          <div className="flex flex-col items-center space-y-4">
            {profile.photoURL && (
              <img
                className="w-28 h-28 rounded-3xl object-cover border-4 border-violet-500"
                src={profile.photoURL}
                alt={profile.displayName || 'User Photo'}
              />
            )}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {profile.displayName || 'No Name'}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 break-words">
              {profile.email || 'No Email'}
            </p>
          </div>
        </div>

        {/* Update Profile Form */}
        <div className="flex-1 max-w-sm bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-violet-700 mb-6 text-center">
            Update Profile
          </h2>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={profile.displayName}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Photo URL
              </label>
              <input
                id="photo"
                name="photo"
                type="url"
                defaultValue={profile.photoURL}
                placeholder="Enter photo URL"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-700 hover:bg-violet-800 text-white font-bold py-4 rounded-2xl transition-colors duration-300"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

