import React, { use } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';


const AddRoommate = () => {
  const {user}=use(AuthContext)

    const handleFormData=e=>{
        e.preventDefault();
        const form=e.target;
        const formData= new FormData(form);
        const newRoom=Object.fromEntries(formData.entries());
        console.log(newRoom);


     fetch('http://localhost:3000/roommates', {
         method: 'POST',
         headers: {
          'content-type': 'application/json'
             },
              body: JSON.stringify(newRoom)
         }
        )
       .then(res=>res.json())
        .then(data=>{
            if(data.insertedId) {
              toast.success('User added successfully')
            }
        })
      
    }
    return (
        <div className='max-w-xl mx-auto p-4 '>
            <ToastContainer position='top-center' autoClose={3000}></ToastContainer>
<div className="text-xl font-semibold mb-4">Add Roommate Listing</div>
     <form onSubmit={handleFormData} className="fieldset ">

        <label className="label">Title</label>
        <input type="text" name="title" className="input input-bordered w-full" placeholder="Looking for a roommate in NYC" required />

        <label className="label">Location</label>
        <input type="text" name='location' className="input input-bordered w-full" required />

        <label className="label">Rent Amount ($)</label>
        <input type="number"  name='rentAmount' className="input input-bordered w-full" min="0" required />

        <label className="label">Room Type</label>
        <select className="select select-bordered w-full" name='roomType' required>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
          <option value="Studio">Studio</option>
          <option value="Other">Other</option>
        </select>

        <label className="label">Lifestyle Preferences</label>
         <select className="select select-bordered w-full" name='preference' required>
          <option value="">Select</option>
          <option value="Pets">Pets</option>
          <option value="Smoking">Smoking</option>
          <option value="Night Owl">Night</option>
        </select>


        <label className="label">Description</label>
        <textarea className="textarea textarea-bordered w-full"  name='description' required></textarea>

        <label className="label">Contact Info</label>
        <input type="text"  name='contactInfo' className="input input-bordered w-full" required />

        <label className="label">Availability</label>
        <select className="select select-bordered w-full" name='availability' required>
          <option value="">Select</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <label  className="label">User Email</label>
        <input  name='email' type="email" className="input input-bordered w-full" defaultValue={user.email} readOnly  />

        <label  className="label">User Name</label>
        <input name='name' type="text" className="input input-bordered w-full" defaultValue={user.displayName} readOnly />

        <button  type="submit" className="btn btn-neutral w-full mt-4">Add</button>
      </form>

        </div>
    );
};

export default AddRoommate;