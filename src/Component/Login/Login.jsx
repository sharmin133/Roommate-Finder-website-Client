
import React, { useContext, useRef, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { sendPasswordResetEmail } from 'firebase/auth';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../Firebase/firebase.init';
import { AuthContext } from '../Context/AuthContext';






const Login = () => {


  const emailRef=useRef()
 const[showPassword,setSowPassword]=useState(false)
  const[errorMessage,setErrorMessage]=useState(false);
   const[successMessage,setSuccessMessage]=useState('')

   const{userLogin,googleSignIn}=useContext(AuthContext)
   const loginNavigate=useNavigate();
   const location=useLocation()
    const from = location.state?.from || '/'; 

    const handleLogIn=(e)=>{
        e.preventDefault();

        const email=e.target.email.value;
        const password=e.target.password.value 
        setSuccessMessage(false)
               setErrorMessage('')

               const passwordRegExp=/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
if(passwordRegExp.test(password)===false){
  setErrorMessage('Password must have one lowercase,one uppercase and 6 character or longer.')
  return;
}

        userLogin( email,password)
        .then(result=>{
            console.log(result.user)
            setSuccessMessage(true)
            toast.success('User login successful.', {
        onClose: () => loginNavigate(from, { replace: true })
      });
        })
        .catch(error=>{
            // console.log(error)
            setErrorMessage(error.message)
            toast.error(error.message);
             
        })

       
     }

     const handleGoogleSignIn=()=>{
      googleSignIn()
      .then(result=>{
        console.log(result.user)
       
          toast.success('Logged in with Google.', {
        onClose: () => loginNavigate(from, { replace: true })
      })
        .catch(error=>{
     
           toast.error(error.message)
        })
      })
     }



  const handleForgetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error('Please enter your email to reset the password.');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent. Please check your email.');
      })
      .catch((error) => {
        // console.error(error);
        toast.error(error.message);
      });
  };
    
    return (
      <div className='bg-gradient-to-r from-sky-50 to-violet-200 py-10'>
      

        <ToastContainer position="top-center" autoClose={3000} />
          <div className="card mx-auto mt-10 mb-20 w-full max-w-sm shrink-0 shadow-3xl bg-linear-to-r from-amber-200 to-amber-500">
            <div className="card-body">
            <h1 className="text-5xl font-bold text-violet-700">Login now!</h1>
              <form onSubmit={handleLogIn} className="fieldset">
                <label className="label ">Email</label>
                <input type="email" className="input" name='email' ref={emailRef} placeholder="Email" />
                <label className="label">Password</label>
                 <div className='relative'>
                                        <input  type={showPassword?'text':'password'} className="input" name='password' placeholder="Password" autoComplete="current-password" />
                                        <button onClick={()=>{setSowPassword(!showPassword)}} className='btn btn-xs absolute top-2 right-6'>
                                          {
                                          showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                                          }
                                          
                                          </button>
                                       </div>
               <div onClick={handleForgetPass}><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4 bg-blue-600 text-white ">Login</button>
              </form>
                 {

                      errorMessage && <p className='text-red-600'>{errorMessage}</p>
                     }

                     {
                      successMessage && <p className='text-green-600'>User login successfully.</p>
                     }
              <p> New to this site. please <Link className='text-blue-600 underline' to='/register'>Register</Link> </p>
              <button  onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>
            </div>
          </div>
      </div>
    );
};

export default Login;