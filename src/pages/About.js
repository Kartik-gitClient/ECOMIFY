import React from 'react';
import { FaUser, FaSchool, FaTools, FaBook } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

function About() {
  return (
    <div className="flex flex-col items-center justify-center m-5 min-h-screen rounded bg-gradient-to-r from-[#5F259F] to-[#4A90E2]">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-white mb-6 animate-bounce">
        About Us
      </h1>

      {/* Larger Introduction Card */}
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-2xl w-full text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h2 className="text-3xl font-bold text-[#5F259F] mb-6">
          Project Introduction
        </h2>

        {/* User Information with Grid Layout for Alignment */}
        <div className="text-left grid grid-cols-2 gap-x-4 gap-y-6">
          <p className="text-xl flex items-center space-x-2">
            <FaUser className="text-[#5F259F]" />
            <span className="font-bold">Name:</span>
          </p>
          <p className="text-xl">Kartik Khandelwal</p>

          <p className="text-xl flex items-center space-x-2">
            <FaBook className="text-[#5F259F]" />
            <span className="font-bold">Class:</span>
          </p>
          <p className="text-xl">12th (Commerce)</p>

          <p className="text-xl flex items-center space-x-2">
            <GiTeacher className="text-[#5F259F]" />
            <span className="font-bold">Topic:</span>
          </p>
          <p className="text-xl">Ecommerce Platform Management</p>

          <p className="text-xl flex items-center space-x-2">
            <FaTools className="text-[#5F259F]" />
            <span className="font-bold">Tools:</span>
          </p>
          <p className="text-xl">React , Flask(python) , MySQL</p>

          <p className="text-xl flex items-center space-x-2">
            <FaSchool className="text-[#5F259F]" />
            <span className="font-bold">School:</span>
          </p>
          <p className="text-xl">Colonels Academy</p>
        </div>
      </div>
    </div>
  );
}

export default About;

