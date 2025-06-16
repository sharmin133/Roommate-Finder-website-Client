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
        // console.log(newRoom);

        newRoom.likes = 0;
        
     fetch('https://roommate-finder-website-server.vercel.app/roommates', {
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
              form.reset();
            }
        })
      
    }
    return (


<div className='bg-gradient-to-r from-sky-50 to-violet-200 py-10'>
      

        <ToastContainer position="top-center" autoClose={3000} />
          <div className="card mx-auto mt-10 mb-20 w-full  max-w-xl  shrink-0 shadow-3xl bg-linear-to-r from-cyan-100 to-blue-300">
            <div className="card-body">
            <h1 className="text-5xl font-bold text-violet-700">Add Information</h1>
              <form onSubmit={handleFormData} className="fieldset shadow-2xl ">
<div className='p-8 '>
  
        <label className="label">Title</label>
        <input type="text" name="title" className="input input-bordered w-full" placeholder="Looking for a roommate in NYC" required />

        <label className="label">Photo URL</label>
          <input type="text" className="input input-bordered w-full" name="photo" placeholder="Your photo URL" required  />
        

        <label className="label">Location</label>
        <input type="text" name='location' className="input input-bordered w-full" placeholder='Location' required />

        <label className="label">Rent Amount ($)</label>
        <input type="number"  name='rentAmount' className="input input-bordered w-full" min="0" placeholder='Rent Amount' required />

        <label className="label">Room Type</label>
        <select className="select select-bordered w-full" name='roomType' placeholder='Room Type' required>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
          <option value="Studio">Studio</option>
          <option value="Other">Other</option>
        </select>

        <label className="label">Lifestyle Preferences</label>
         <select className="select select-bordered w-full" name='preference' placeholder='Lifestyle Preferences' required>
          <option value="">Select</option>
          <option value="Pets">Pets</option>
          <option value="Smoking">Smoking</option>
          <option value="Night Owl">Night</option>
          <option value="None">None</option>
        </select>


        <label className="label">Description</label>
        <textarea className="textarea textarea-bordered w-full" placeholder='Description' name='description' required></textarea>

        <label className="label">Contact Info</label>
        <input type="text"  name='contactInfo' placeholder='Contact Info'  className="input input-bordered w-full" required />

        <label className="label">Availability</label>
        <select className="select select-bordered w-full" placeholder='Availability' name='availability' required>
          <option value="">Select</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <label  className="label">User Email</label>
        <input  name='email' type="email" className="input input-bordered w-full" defaultValue={user.email} readOnly  />

        <label  className="label">User Name</label>
        <input name='name' type="text" className="input input-bordered w-full" defaultValue={user.displayName} readOnly />

        <button  type="submit" className="btn btn-neutral w-full mt-4">Add</button>
</div>
      </form>
                
                    
              
            </div>
          </div>
      </div>


    );
};

export default AddRoommate;