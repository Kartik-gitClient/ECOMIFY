import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaList, FaUserPlus, FaUserEdit, FaUserCheck, FaSortAmountUpAlt } from 'react-icons/fa'; // Icons for actions

function ManageEmployees() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#5F259F] mb-8 text-center">Employee Management</h2>

        {/* Employee Management Options - Side by Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Employee List */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaList className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Employee List</h3>
            <p className="text-gray-600 mb-4">View the complete list of employees.</p>
            <Link to="/view-employees" className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
              View Employees
            </Link>
          </div>
          {/* Add New Recruitment */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaUserPlus className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Recruitment</h3>
            <p className="text-gray-600 mb-4">Recruit new employees and add them to the database.</p>
            <Link
              to="/add Employee" // Replace with the actual route to your Add Employee page
              className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out"
            >
              Add Recruitment
            </Link>
          </div>

          {/* Update Employee Details */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaUserEdit className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Employee Details</h3>
            <p className="text-gray-600 mb-4">Modify the information of existing employees.</p>
            <Link to="/update-employee" className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
              Update Employee
            </Link>
          </div>

          {/* Retire Employee */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaUserCheck className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Retire Employee</h3>
            <p className="text-gray-600 mb-4">Manage employee retirements and benefits.</p>
            <Link to="/retire-employee" className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
              Retire Employee
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaSortAmountUpAlt className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sort Employees</h3>
            <p className="text-gray-600 mb-4">View and sort employees based on their info.</p>
            <Link to="/sort-employees" className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
              Sort Employees
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
}

export default ManageEmployees;
