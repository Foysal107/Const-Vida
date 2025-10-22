import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form below or reach us at
          <span className="font-semibold text-orange-500"> info@foodpage.com</span>
        </p>

        <div className="grid md:grid-cols-2 gap-6">
   
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
            >
              Send Message
            </button>
          </form>

        
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="text-gray-600">
                📍 <strong>Address:</strong> 123 Food Street, Flavor Town
              </p>
              <p className="text-gray-600">
                📞 <strong>Phone:</strong> +880 123 456 789
              </p>
              <p className="text-gray-600">
                📧 <strong>Email:</strong> info@foodpage.com
              </p>
            </div>

            {/* Google Map Embedded */}
            <div className="mt-6">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9027858603415!2d90.39124931498179!3d23.750897584589677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88b2f93e45d%3A0x567efba9f6857c7d!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1628947722845!5m2!1sen!2sbd"
                className="w-full h-64 rounded-lg border-none"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
