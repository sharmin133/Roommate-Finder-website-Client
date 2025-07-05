import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 dark:bg-gray-900 text-blue-900 dark:text-white py-10 shadow-inner">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <img className="w-16 h-16 rounded-3xl mb-2" src="/AllPictures/logo.png" alt="FlatFusion Logo" />
        <p className="text-3xl font-bold">
          <span className="text-pink-400">Flat</span>
          <span className="text-yellow-400">Fusion</span>
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 px-4 md:px-20 text-center sm:text-left">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Contact Us</h2>
          <p className="dark:text-white">Email: support@flatfusion.com</p>
          <p className="dark:text-white">Address:</p>
          <p className="dark:text-white">Gulshan, Dhaka, Bangladesh</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/info/terms" className="hover:underline hover:text-pink-600 dark:hover:text-yellow-400 dark:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/info/privacy" className="hover:underline hover:text-pink-600 dark:hover:text-yellow-400 dark:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/info/dev" className="hover:underline hover:text-pink-600 dark:hover:text-yellow-400 dark:text-white">
                Developer Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Follow Us</h2>
          <div className="flex flex-col sm:items-start items-center gap-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-500">
              <FaXTwitter className="text-yellow-400" />
              <span className="hidden md:block">Twitter</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-600">
              <FaFacebook className="text-pink-500" />
              <span className="hidden md:block">Facebook</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-yellow-400">
              <FaLinkedin className="text-blue-600" />
              <span className="hidden md:block">LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-yellow-400">
              <FaGithub className="text-blue-600" />
              <span className="hidden md:block">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm md:text-base mt-10 dark:text-white">
        © {new Date().getFullYear()} FlatFusion. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

