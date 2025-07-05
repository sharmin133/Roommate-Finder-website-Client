import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../Firebase/firebase.init';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const { userLogin, googleSignIn } = useContext(AuthContext);
  const loginNavigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccessMessage(false);
    setErrorMessage('');

    const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (passwordRegExp.test(password) === false) {
      setErrorMessage(
        'Password must have one lowercase, one uppercase, and be 6 characters or longer.'
      );
      return;
    }

    userLogin(email, password)
      .then((result) => {
        console.log(result.user)
        setSuccessMessage(true);
        toast.success('User login successful.', {
          onClose: () => loginNavigate(from, { replace: true }),
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user)
        toast.success('Logged in with Google.', {
          onClose: () => loginNavigate(from, { replace: true }),
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
        toast.error(error.message);
      });
  };

  return (
    <div className=" py-10 min-h-screen">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="card mx-auto mt-10 mb-20 w-full max-w-sm shadow-lg bg-white rounded-lg border-2 border-pink-300 p-6 transition-colors duration-300">
        <h1 className="text-5xl font-bold text-blue-800 mb-6 text-center">Login now!</h1>
        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="label font-semibold text-blue-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
              name="email"
              ref={emailRef}
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="label font-semibold text-blue-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="input input-bordered w-full border-pink-400 focus:ring-yellow-400 focus:border-yellow-400"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute top-2 right-3 bg-pink-200 hover:bg-pink-300 text-pink-700"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div onClick={handleForgetPass} className="text-right cursor-pointer">
            <a className="link link-hover text-pink-600 hover:text-pink-800">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-colors"
          >
            Login
          </button>
        </form>

        {errorMessage && <p className="text-red-600 mt-3 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-600 mt-3 text-center">User login successfully.</p>}

        <p className="mt-6 text-center text-blue-700">
          New to this site?{' '}
          <Link to="/register" className="underline text-pink-600 hover:text-pink-800">
            Sign Up
          </Link>
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="btn mt-6 w-full bg-white border-2 border-pink-400 text-blue-700 hover:border-pink-600 hover:text-pink-700 flex items-center justify-center gap-2"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
