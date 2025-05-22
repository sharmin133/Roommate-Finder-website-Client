import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { Link } from 'react-router';


const Footer = () => {
    return (
        <div className='bg-base-100 text-base-content py-8 shadow-inner'>
             
             <div className='flex items-center text-center justify-center border-t-2 '> <img className='w-15 h-15 rounded-3xl' src="/AllPictures/logo.png" alt="" />
            <a className="btn btn-ghost text-4xl text-green-600 font-bold">FlatFusion</a>
         </div> 
       
    <div className='flex items-center text-center justify-around'>


    <div >
        
        <ul className="">
          <li><Link to="/terms" className="hover:underline hover:text-blue-600">Terms of Service</Link></li>
          <li><Link to="/privacy" className="hover:underline hover:text-blue-600">Privacy Policy</Link></li>
          <li><Link to="/developer-resources" className="hover:underline hover:text-blue-600">Developer Resources</Link></li>
        </ul>
      </div>



      <div>
        <h2 className="text-xl font-semibold mb-3">Connect Us</h2>
        <ul className=''>
          <li><a href="https://twitter.com"  className="flex items-center gap-2 hover:text-blue-600"><FaXTwitter />Twitter</a></li>
          <li><a href="https://facebook.com"  className="flex items-center gap-2 hover:text-blue-600"><FaFacebook /> Facebook</a></li>
          <li><a href="https://linkedin.com"  className="flex items-center gap-2 hover:text-blue-600"> <FaLinkedin />LinkedIn</a></li>
          <li><a href="https://github.com" className="flex items-center gap-2 hover:text-blue-600"><FaGithub /> GitHub</a></li>
        </ul>
        
      </div>
    </div>

<p className='text-center text-xl'>© {new Date().getFullYear()} AppNest. All rights reserved.</p>
        </div>
    );
};

export default Footer;