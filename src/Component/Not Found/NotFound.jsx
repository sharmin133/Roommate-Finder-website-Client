import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
   

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (

        <div className='bg-gradient-to-r from-sky-50 to-violet-200'>

            
        <div className="flex flex-col items-center justify-center text-center py-8 px-6">
            <div className="flex items-center justify-center mb-6">
                <img 
                    src="/AllPictures/error.jpg" 
                    alt="Error" 
                    className="max-w-full w-1/2 sm:w-2/3 md:w-1/2 lg:w-1/3" 
                />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">404 - Page Not Found</h2>
            <p className="text-lg sm:text-2xl font-medium text-gray-600 mb-6">Oops! The page you are looking for doesn't exist.</p>

            <button 
                className="text-xl sm:text-3xl bg-green-700 font-bold rounded-3xl p-4 text-white hover:bg-green-800 transition"
                onClick={handleGoHome}
            >
                Go back Home
            </button>
        </div>
        </div>
    );
};  

export default NotFound;
