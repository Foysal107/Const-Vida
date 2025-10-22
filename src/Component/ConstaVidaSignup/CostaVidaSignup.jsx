import React from 'react';

const CostaVidaSignup = () => {
  return (
    <div className="bg-teal-600 text-white rounded-xl p-8 container m-20 mx-auto font-sans">
      {/* Header Text */}
      <h2 className="text-2xl font-bold mb-2">Sign up for the LATEST &amp; GREATEST</h2>
      <p className="mb-6">
        Enter your email to receive the latest updates on limited menu items and great Costa Vida deals.
      </p>

      {/* Email Input + Button */}
      <form className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-grow px-4 py-2 rounded-md text-black placeholder-white-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-teal-600 font-bold px-4 py-2 rounded-md hover:bg-teal-100 transition"
        >
          →
        </button>
      </form>
    </div>
  );
};

export default CostaVidaSignup;
