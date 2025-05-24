import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { Link } from 'react-router';


const Footer = () => {
    return (
        <div className='bg-base-100 text-base-content py-8 shadow-inner'>
             
             <div className='flex items-center text-center justify-center border-t-2 '> <img className='w-15 h-15 rounded-3xl' src="/AllPictures/logo.png" alt="" />
            <p className=" text-4xl"><span className='font-bold text-pink-600'>Flat</span><span className='font-medium text-yellow-500'>Fusion</span></p>
         </div> 
            <p className='text-center md:text-xl'> Give residents a cross-platform roommate matching solution to find the perfect roommate, seamlessly integrated with your management system.</p>
       
    <div className='flex items-center text-center justify-around'>

      <div>
        <h2 className='md:text-xl font-semibold mb-3'>Contact Us</h2>
        <a className='hover:underline'>Email: support@flatfusion.com</a>
       <p>Address: </p>
       <p>Gulshan, Dhaka, Bangladesh</p>
      </div>


    <div >
        
        <ul className="">
          <li><Link to="/terms" className="hover:underline hover:text-blue-600">Terms of Service</Link></li>
          <li><Link to="/privacy" className="hover:underline hover:text-blue-600">Privacy Policy</Link></li>
          <li><Link to="/developer-resources" className="hover:underline hover:text-blue-600">Developer Resources</Link></li>
        </ul>
      </div>



      <div>
        <h2 className="md:text-xl font-semibold mb-3 flex justify-center">Follow Us</h2>
       
          <p><a href="https://twitter.com"  className="flex  items-center gap-2 hover:text-blue-600 "><FaXTwitter /><p className='hidden md:block'>Twitter</p></a></p>
          <p><a href="https://facebook.com"  className="flex items-center gap-2 hover:text-blue-600"><FaFacebook /><p className='hidden md:block'>Facebook</p> </a></p>
         <p> <a href="https://linkedin.com"  className="flex items-center gap-2 hover:text-blue-600"> <FaLinkedin /><p className='hidden md:block'>Linkedin</p></a></p>
          <p><a href="https://github.com" className="flex items-center gap-2 hover:text-blue-600"><FaGithub /> <p className='hidden md:block'>Github</p></a></p>
       
        
      </div>
    </div>

<p className='text-center text-xl'>© {new Date().getFullYear()} FlatFusion. All rights reserved.</p>
        </div>
    );
};

export default Footer;