import React from 'react';
import { FaUserTie, FaBoxes, FaRegMoneyBillAlt,  FaChartLine } from 'react-icons/fa';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 rounded min-h-screen bg-gradient-to-r from-[#5F259F] to-[#4A90E2] ">
      
      <h1 className="text-5xl   mb-8 text-white">
        Welcome to ECOMIFY
      </h1>

      
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full h-2/3 text-center">
        <h2 className="text-3xl font-semibold text-[#5F259F] mb-6">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
          <div className="flex flex-col items-center">
            <FaUserTie className="text-[#5F259F] text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-[#5F259F] mb-2">
              Employee Management
            </h3>
            <p className="text-gray-700 text-lg">
              Seamlessly manage employee information, salaries, and roles.
            </p>
          </div>

         
          <div className="flex flex-col items-center">
            <FaBoxes className="text-[#5F259F] text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-[#5F259F] mb-2">
              Product Management
            </h3>
            <p className="text-gray-700 text-lg">
              Organize and manage various types of products with ease.
            </p>
          </div>

      
          <div className="flex flex-col items-center">
            <FaRegMoneyBillAlt className="text-[#5F259F] text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-[#5F259F] mb-2">
              Profit Analytics
            </h3>
            <p className="text-gray-700 text-lg">
              See insights of product's Cost ,  profit , Margin conviniently.
            </p>
          </div>

       
          <div className="flex flex-col items-center">
          <FaChartLine className="text-[#5F259F] text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-[#5F259F] mb-2">
              Integrated Analytics
            </h3>
            <p className="text-gray-700 text-lg">
             Integrated analytics and management of employees and products. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
