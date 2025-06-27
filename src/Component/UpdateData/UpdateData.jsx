import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const UpdateData = () => {
  const {
    _id,
    title,
    photo,
    location,
    rentAmount,
    name,
    email,
    roomType,
    description,
    preference,
    availability,
    contactInfo,
  } = useLoaderData();

  const handleFormUpdateData = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRoom = Object.fromEntries(formData.entries());

    fetch(`https://roommate-finder-website-server.vercel.app/roommates/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': "application/json",
      },
      body: JSON.stringify(updatedRoom),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          toast.success('Data Updated Successfully');
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-sky-50 to-violet-200 dark:from-gray-900 dark:to-gray-800 py-10 transition-colors duration-500 min-h-screen">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="text-4xl text-green-600 dark:text-green-400 font-bold text-center p-3">
          Update Information
        </h2>
        <form onSubmit={handleFormUpdateData} className="fieldset shadow-2xl bg-white dark:bg-gray-900 p-6 rounded-lg transition-colors duration-500">
          <label className="label dark:text-gray-200">Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Looking for a roommate in NYC"
            defaultValue={title}
            required
          />

          <label className="label dark:text-gray-200">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            defaultValue={photo}
            name="photo"
            placeholder="Your photo URL"
          />

          <label className="label dark:text-gray-200">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            defaultValue={location}
            required
          />

          <label className="label dark:text-gray-200">Rent Amount ($)</label>
          <input
            type="number"
            name="rentAmount"
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            min="0"
            defaultValue={rentAmount}
            required
          />

          <label className="label dark:text-gray-200">Room Type</label>
          <select
            className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            name="roomType"
            defaultValue={roomType}
            required
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Shared">Shared</option>
            <option value="Studio">Studio</option>
            <option value="Other">Other</option>
          </select>

          <label className="label dark:text-gray-200">Lifestyle Preferences</label>
          <select
            className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            name="preference"
            defaultValue={preference}
            required
          >
            <option value="">Select</option>
            <option value="Pets">Pets</option>
            <option value="Smoking">Smoking</option>
            <option value="Night Owl">Night</option>
          </select>

          <label className="label dark:text-gray-200">Description</label>
          <textarea
            className="textarea textarea-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            name="description"
            defaultValue={description}
            required
          ></textarea>

          <label className="label dark:text-gray-200">Contact Info</label>
          <input
            type="text"
            name="contactInfo"
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            defaultValue={contactInfo}
            required
          />

          <label className="label dark:text-gray-200">Availability</label>
          <select
            className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            name="availability"
            defaultValue={availability}
            required
          >
            <option value="">Select</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>

          <label className="label dark:text-gray-200">User Email</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            defaultValue={email}
            readOnly
          />

          <label className="label dark:text-gray-200">User Name</label>
          <input
            name="name"
            type="text"
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            defaultValue={name}
            readOnly
          />

          <button
            type="submit"
            className="btn bg-green-700 hover:bg-green-800 text-white font-bold text-xl w-full mt-4"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
