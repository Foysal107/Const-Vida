import React, { useState } from "react";
// import logo from "/logo.png"; // Left side logo
// import waveLogo from "/wave-logo.png"; // Right side small logo (circle wave)
import { FaInstagram,FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  return (
    <footer className="bg-orange-500 text-white py-12 px-8 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

     
        <div>
          {/* <img src={logo} alt="Costa Vida Logo" className="h-20 mb-4" /> */}
          <div className="flex space-x-4 mb-6 text-2xl">
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaFacebook  className="cursor-pointer hover:scale-110 transition" />
            <FaTiktok className="cursor-pointer hover:scale-110 transition" />
          </div>
          <p className="text-sm">©2025 Costa Vida</p>
          <div className="text-sm mt-2 space-y-1">
            <p className="hover:underline cursor-pointer">Legal</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Supplemental California Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Website Accessibility Statement</p>
          </div>

       
          <div className="mt-6 flex items-center space-x-3 border px-4 py-2 rounded-full bg-white text-black w-max">
            <span className="text-sm font-semibold">High Contrast</span>
            <div
              onClick={() => setIsHighContrast(!isHighContrast)}
              className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all 
              ${isHighContrast ? "bg-green-500" : "bg-gray-400"}`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300
                ${isHighContrast ? "translate-x-7" : "translate-x-0"}`}
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-8 text-sm font-semibold">
          <div className="space-y-2">
            <p>MENU</p>
            <p>ALL LOCATIONS</p>
            <p>CATERING</p>
            <p>REWARDS</p>
            <p>GIFTS</p>
            <p>CULTURE</p>
          </div>
          <div className="space-y-2">
            <p>CAREERS</p>
            <p>NEWS</p>
            <p>ABOUT US</p>
            <p>NUTRITION & ALLERGEN INFO</p>
            <p>CONTACT US</p>
          </div>
        </div>

    
        <div className="flex justify-center md:justify-end items-start">
          <img src="/src/assets/logo.png" alt="Wave Logo" className="rounded-full h-80" />
        </div>
      </div>
      
<footer className="text-center text-xl  text-teal-500 mt-8">
  © 2025 Foysal. All rights reserved.
</footer>
    </footer>
    
  );
};

export default Footer;
