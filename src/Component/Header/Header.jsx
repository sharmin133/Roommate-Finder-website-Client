import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const Header = () => {

  const{user,signOutUser}=use(AuthContext)

  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      console.log('signout successfully')
    })
    .catch(error=>{
      console.log(error)
    })
  }
    const links=<>
       <li><NavLink to='/' >Home</NavLink></li>
       <li><NavLink to='/addRoommate' >Add Roommate</NavLink></li>
       <li><NavLink to='/browsingList' >Browse Listing</NavLink></li>
       
       <li><NavLink to='/login'>Login</NavLink></li>
       <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/detailsData'>DetailsData</NavLink></li>
        <li>
        
          <NavLink to='/myListing'>My Listings</NavLink>
      </li>


     
    
    </>
    return (
        <div>
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
           {links}

      </ul>
    </div>
   <div className="flex items-center ">
          <img className="md:w-24 md:h-24 w-12 h-12" src="/AllPictures/logo.png" alt="AppNest Logo" />
          <p className="lg:text-4xl sm:text-xl font-bold text-green-600">FlatFusion</p>
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   
              {links}

    </ul>
  </div>
  <div className="navbar-end">
   {user?
        <div className='flex'>
        <img className='w-12 h-12 rounded-3xl p-1 ' src={user.photoURL} alt="" />
        <a className="btn bg-blue-600 text-white rounded-2xl p-2" onClick={handleSignOut}><span className='text-2xl sm:text-xl'>Sign out</span></a>
        </div>
          :<Link to='/login' ><span className='sm:text-xl text-2xl bg-blue-600 text-white rounded-2xl px-4 py-2 font-medium'>Sign in</span></Link>}
        </div>
      </div>

{/* <img className=' h-3/5' src="/AllPictures/header-banner.jpg" alt="" /> */}

</div>
    )
}

export default Header;