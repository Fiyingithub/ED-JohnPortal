import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white px-4 md:px-8 lg:px-16 py-12">
      <div className="container mx-auto grid gap-8 lg:grid-cols-4">
        {/* Logo and Newsletter */}
        <div>
          <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold leading-tight">
              ED-JOHN INSTITUTE OF MANAGEMENT <br />
              AND INSTITUTE
            </h1>
          </div>
          <p className="text-lg mb-4">Subscribe to our newsletter</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-4 rounded-full bg-white text-black shadow-md focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Lending Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* About Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Help</h3>
          <ul className="space-y-2">
            <li>New Admissions</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Social Media</h3>
          <ul className="space-y-2">
            <div>
              <i className="fa fa-facebook"></i>
            </div>
            <div>
              <i className="fa fa-twitter"></i>
            </div>
            <div>
              <i className="fa fa-instagram"></i>
            </div>
            <div>
              <i className="fa fa-whatsapp"></i>
            </div>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12">
        <hr className="border-gray-600 mb-6" />
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-sm text-center md:text-left">
            Copyright © 2024 | Powered by  Mindshare Datatech
          </p>
          <div className="mt-4 md:mt-0">
            <button className="bg-white text-black py-2 px-4 rounded-full flex items-center">
              English <i className="fas fa-chevron-down ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;