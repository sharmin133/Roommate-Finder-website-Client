

import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';


const UpdateData = () => {

    const {_id,title,location,rentAmount,name,email,roomType,description,preference,availability,contactInfo}=useLoaderData();
        const handleFormUpdateData=e=>{
            e.preventDefault();
            const form=e.target;
            const formData= new FormData(form);
            const updatedRoom=Object.fromEntries(formData.entries());
            // console.log(updatedRoom);
    
         fetch(`http://localhost:3000/roommates/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(updatedRoom)
         })
         .then(res=>res.json())
         .then(data=>{
           if(data.modifiedCount){
            toast.success('Data Updated Successfully')
           }
         })
    
        }

    return (
        <div>
             <div className='max-w-xl mx-auto p-4 '>
            <ToastContainer position='top-center' autoClose={3000}></ToastContainer>
<div className="text-xl font-semibold mb-4">Add Roommate Listing</div>
     <form onSubmit={handleFormUpdateData} className="fieldset ">

        <label className="label">Title</label>
        <input type="text" name="title" className="input input-bordered w-full" placeholder="Looking for a roommate in NYC"  defaultValue={title}required />

         <label className="label">Photo URL</label>
          <input type="text" className="input" name="photo" placeholder="Your photo URL" />
        
        <label className="label">Location</label>
        <input type="text" name='location' className="input input-bordered w-full" defaultValue={location} required />

        <label className="label">Rent Amount ($)</label>
        <input type="number"  name='rentAmount' className="input input-bordered w-full" min="0" defaultValue={rentAmount} required />

        <label className="label">Room Type</label>
        <select className="select select-bordered w-full" name='roomType' defaultValue={roomType} required>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
          <option value="Studio">Studio</option>
          <option value="Other">Other</option>
        </select>

        <label className="label">Lifestyle Preferences</label>
         <select className="select select-bordered w-full" name='preference' defaultValue={preference} required>
          <option value="">Select</option>
          <option value="Pets">Pets</option>
          <option value="Smoking">Smoking</option>
          <option value="Night Owl">Night</option>
        </select>


        <label className="label">Description</label>
        <textarea className="textarea textarea-bordered w-full"  name='description' defaultValue={description} required></textarea>

        <label className="label">Contact Info</label>
        <input type="text"  name='contactInfo' className="input input-bordered w-full" defaultValue={contactInfo} required />

        <label className="label">Availability</label>
        <select className="select select-bordered w-full" name='availability' defaultValue={availability} required>
          <option value="">Select</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <label  className="label">User Email</label>
        <input  name='email' type="email" className="input input-bordered w-full" defaultValue={email} readOnly  />

        <label  className="label">User Name</label>
        <input name='name' type="text" className="input input-bordered w-full" defaultValue={name} readOnly />

        <button  type="submit" className="btn btn-neutral w-full mt-4">Update</button>
      </form>

        </div>
        </div>
    );
};

export default UpdateData;