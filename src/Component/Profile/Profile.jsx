import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {

    const { user } = useContext(AuthContext);
  const navigate=useNavigate();

 
  const [profile, setProfile] = useState({
    displayName: '',
    email: '',
    photoURL: ''
  });

  
  useEffect(() => {

    if(!user){
      return navigate('/login');
    }
    else  {
      setProfile({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

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
        console.log('Profile updated successfully');
        setProfile((prevProfile) => ({
          ...prevProfile, 
          displayName: name,
          photoURL: photo,
        }));
       toast.success('Profile Updated Successfully!');
      
      })
      .catch((error) => {
        console.log(error.message);
        toast.error('Failed to update profile.');
      });
  };
    return (
       <div className='bg-gradient-to-r from-sky-50 to-green-200 '>
    
  
   <ToastContainer position="top-center" autoClose={3000} />
      <div className=''>
     <p className='text-5xl text-center font-bold shadow p-4 text-violet-700'>   About the User</p>
      </div>
      <div>
        <div className='flex justify-center items-center m-2'>
          {
          profile.photoURL && (<img className='w-24 h-24 rounded-2xl' src={profile.photoURL} alt="" />
        )}
        </div>
        <h2 className='text-3xl text-center'> {profile.displayName}</h2>
        <p className='text-3xl text-center'> {profile.email}</p>
        
      </div >
     <div className='pb-10'>
       <div className="card bg-base-100 mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body  ">
          <h1 className="text-4xl font-bold text-violet-700">Update Your Profile</h1>
          <form onSubmit={handleUpdate} className="fieldset ">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Your Name"
              defaultValue={profile.displayName}
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="Your Photo URL"
              defaultValue={profile.photoURL}
            />
            <button className="btn bg-green-700 hover:bg-green-800 text-3xl text-white rounded-2xl p-4 font-bold ">Save</button>
          </form>
        </div>
      </div>
     </div>
    </div>
    );
};

export default Profile;