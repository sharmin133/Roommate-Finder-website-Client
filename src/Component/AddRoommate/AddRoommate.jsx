import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const AddRoommate = () => {
  const { user } = useContext(AuthContext);

  const handleFormData = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRoom = Object.fromEntries(formData.entries());

    newRoom.likes = 0;

    fetch('https://roommate-finder-website-server.vercel.app/roommates', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRoom)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('User added successfully');
          form.reset();
        }
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-500 py-10 min-h-screen">
    
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="card mx-auto mt-10 mb-20 w-full max-w-xl shadow-lg bg-white rounded-lg border-2 border-pink-300 transition-colors duration-300">
        <div className="card-body p-8">
          <h1 className="text-5xl font-bold text-blue-800 mb-6 text-center">Add Information</h1>
          <form onSubmit={handleFormData} className="space-y-6">
            <div>
              <label className="label font-semibold text-blue-700">Title</label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Looking for a roommate in NYC"
                required
              />
            </div>

            <div>
              <label className="label font-semibold text-blue-700">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Your photo URL"
                required
              />
            </div>

            <div>
              <label className="label font-semibold text-blue-700">Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Location"
                required
              />
            </div>

            <div>
              <label className="label font-semibold text-blue-700">Rent Amount ($)</label>
              <input
                type="number"
                name="rentAmount"
                min="0"
                className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Rent Amount"
                required
              />
            </div>

            <div>
              <label className="label font-semibold text-blue-700">Room Type</label>
              <select
                name="roomType"
                className="select select-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                required
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Shared">Shared</option>
                <option value="Studio">Studio</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold text-blue-700">Lifestyle Preferences</label>
              <select
                name="preference"
                className="select select-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                required
              >
                <option value="">Select</option>
                <option value="Pets">Pets</option>
                <option value="Smoking">Smoking</option>
                <option value="Night Owl">Night</option>
                <option value="None">None</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold text-blue-700">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Description"
                required
              ></textarea>
            </div>

            <div>
              <label className="label font-semibold text-blue-700">Contact Info</label>
              <input
                type="text"
                name="contactInfo"
                className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Contact Info"
                required
              />
            </div>

            <div>
              <label className="label font-semibold text-blue-700">Availability</label>
              <select
                name="availability"
                className="select select-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                required
              >
                <option value="">Select</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold text-blue-700">User Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                defaultValue={user.email}
                readOnly
              />
            </div>

            <div>
              <label className="label font-semibold text-blue-700">User Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                defaultValue={user.displayName}
                readOnly
              />
            </div>

            <button
              type="submit"
              className="btn bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-2xl w-full mt-4 transition-colors"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoommate;
