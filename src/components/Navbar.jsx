import React from 'react';

function Navbar() {
  return (
    <nav className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-1 justify-center items-center">
            <img
              src="/assets/logo-1.png"
              alt="Logo"
              className="bg-green-800 p-1 rounded-2xl w-12 h-12"
            ></img>
            <div className="leading-4">
              <h4 className="font-oswald text-2xl font-bold">BazarDor</h4>
              <span className="text-xs text-gray-600 font-inter">Wednesday, October 7, 2026</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="cursor-pointer hover:text-green-800 transition-colors ease-in duration-200 font-inter">
              Sign In
            </button>
            <button className="bg-green-800 px-6 py-2 rounded-4xl cursor-pointer transition-colors ease-in duration-200 hover:bg-green-900 font-inter">
              Sign Up
            </button>
          </div>
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
