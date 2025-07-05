import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../Firebase/firebase.init';
import { AuthContext } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleSignIn } = useContext(AuthContext);
  const registerNavigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;

    setSuccessMessage(false);
    setErrorMessage('');

    const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegExp.test(password)) {
      setErrorMessage('Password must have one lowercase, one uppercase, and 6 characters or longer.');
      return;
    }

    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setSuccessMessage('User has been created successfully.');
            toast.success('Logged in successfully.', {
              onClose: () => registerNavigate(from, { replace: true }),
            });
          })
          .catch((error) => {
            setErrorMessage(error.message);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success('Logged in with Google.', {
          onClose: () => registerNavigate(from, { replace: true }),
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 py-10 min-h-screen flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="card mx-auto w-full max-w-sm shadow-lg rounded-xl bg-white p-8 border-4 border-blue-600">
        <h1 className="text-5xl font-bold text-blue-800 mb-6 text-center">Sign Up Now</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label text-blue-800 font-semibold">Name</label>
            <input
              type="text"
              className="input input-bordered w-full border-yellow-400 focus:border-yellow-500"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className="label text-blue-800 font-semibold">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full border-pink-400 focus:border-pink-500"
              name="photo"
              placeholder="Your photo URL"
            />
          </div>
          <div>
            <label className="label text-blue-800 font-semibold">Email</label>
            <input
              type="email"
              className="input input-bordered w-full border-blue-400 focus:border-blue-500"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="relative">
            <label className="label text-blue-800 font-semibold">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="input input-bordered w-full border-yellow-400 focus:border-yellow-500"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute top-3 right-3 bg-pink-200 text-pink-700 hover:bg-pink-300 rounded"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className="btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg transition">
            Sign Up
          </button>
        </form>

        {errorMessage && <p className="text-red-600 mt-4 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-600 mt-4 text-center">{successMessage}</p>}

        <p className="mt-6 text-center text-blue-800">
          Already have an account? Please{' '}
          <Link className="text-yellow-600 underline hover:text-yellow-700" to="/login">
            Login
          </Link>
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold border border-yellow-500 w-full flex items-center justify-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="inline"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
