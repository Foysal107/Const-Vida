import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">


        <div className="flex items-center space-x-2">
          <img
            src="/../src/assets/logo.png"
            alt="Logo"
            className="h-20 w-20"
          />
          <h1 className="text-6xl font-bold text-teal-600 permanent-logo">CostVida</h1>
        </div>


        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/"> <button className="hover:text-teal-600 cursor-pointer">Home</button></Link>
          <Link to="/Menu"> <li className="hover:text-teal-600 cursor-pointer">Menu</li></Link>
          <Link to="/About">    <li className="hover:text-teal-600 cursor-pointer">About</li></Link>
          <Link to="/Contact">  <li className="hover:text-teal-600 cursor-pointer">Contact</li></Link>

        </ul>


        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold">
          ORDER NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
