import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 text-center">
     
      <h1 className="text-9xl font-extrabold text-orange-500 animate-bounce">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4 text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <p className="text-gray-600 mt-2">
        It might have been moved or deleted.
      </p>

      
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg transition transform hover:scale-110 hover:bg-orange-600">
          Go Back Home
        </button>
      </Link>

   
      <div className="mt-10 w-16 h-16 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default ErrorPage;
