import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi'; 
import logo from "./logoc.jpeg";

function Header() {
  return (
    <header className="bg-[#5F259F] p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* ECOM-GO Heading with Icon */}
        <div className="flex items-center space-x-3">
        <img src={logo} className="h-11 rounded b-50%"  alt='logo' />
          
          <h1 className="text-4xl text-white hover:text-gray-200 transition duration-300 ease-in-out">
            ECOMIFY
          </h1>
        </div>

     
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-white text-lg flex items-center space-x-2 hover:bg-white hover:text-[#5F259F] px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                <AiFillHome /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/management"
                className="text-white text-lg flex items-center space-x-2 hover:bg-white hover:text-[#5F259F] px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                <FaTasks /> <span>Management</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-lg flex items-center space-x-2 hover:bg-white hover:text-[#5F259F] px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                <FiInfo /> <span>About Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

