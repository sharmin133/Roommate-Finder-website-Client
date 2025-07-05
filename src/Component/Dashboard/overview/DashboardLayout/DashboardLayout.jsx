import React from 'react';
import { Outlet, NavLink } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 flex flex-col md:flex-row ">
      {/* Sidebar */}
    <aside
   className="
    bg-[#f3f4f6] dark:bg-[#1f2937]  // light: slate-100, dark: gray-800
    text-gray-800 dark:text-gray-200
    p-4 md:p-5
    w-full md:w-64
    flex md:block
    overflow-x-auto md:overflow-visible
    transition-colors duration-300
    shadow-md
    rounded-md
  "
>
  <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4">
    <li>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap'
            : 'text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap'
        }
      >
        Overview
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap'
            : 'text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap'
        }
      >
        My Profile
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dashboard/myListing"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap'
            : 'text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap'
        }
      >
        My Listings
      </NavLink>
    </li>
  </ul>
</aside>


      {/* Content */}
      <main className="flex-1 p-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;


