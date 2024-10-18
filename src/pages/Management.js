import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaBoxOpen } from 'react-icons/fa'; // Icons for the boxes

function Management() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#5F259F] mb-8 text-center">Management</h2>
        
        {/* Side-by-Side Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Employee Management Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaUserTie className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Employee Management</h3>
            <p className="text-gray-600 mb-4">Manage all aspects of employee data including recruitment, retirement, and salaries.</p>
            <Link
              to="/manage-employees"  
              className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out"
            >
              Manage Employees
            </Link>
          </div>

          {/* Product Management Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaBoxOpen className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Management</h3>
            <p className="text-gray-600 mb-4">Handle product details , Product Stream Lines, stock, categories, and pricing , update product details.</p>
            <Link
              to="/manage-products"  // This could be another page like Manage Products (you can create it similarly)
              className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out"
            >
              Manage Products
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Management;
