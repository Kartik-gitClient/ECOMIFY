import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateEmployee() {
  const [employeeId, setEmployeeId] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [department, setDepartment] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  const fetchEmployeeDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/update-employee/${employeeId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch employee details');
      }
      const employee = await response.json();
      setName(employee.name);
      setSalary(employee.salary);
      setDepartment(employee.department);
      setDob(employee.dob);
      setAddress(employee.address);
    } catch (error) {
      toast.error(error.message || 'An error occurred while fetching employee details!');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const employeeData = { name, salary, department, dob, address };

    try {
      const response = await fetch(`http://127.0.0.1:5000/update-employee/${employeeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update employee');
      }

      const result = await response.json();
      toast.success(result.message || 'Employee updated successfully!');

      // Reset form fields
      setEmployeeId('');
      setName('');
      setSalary('');
      setDepartment('');
      setDob('');
      setAddress('');
    } catch (error) {
      toast.error(error.message || 'An error occurred while updating the employee!');
    }
  };

  return (
    <div className="p-4 m-auto w-3/4">
      <h2 className="text-3xl text-center font-bold text-[#5F259F] mb-6">Update Employee</h2>
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeId">
            Employee ID
          </label>
          <input
            type="number"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="button"
          onClick={fetchEmployeeDetails}
          className="bg-[#5F259F] hover:bg-[#7A4BCA] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Fetch Details
        </button>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
            Salary
          </label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
            Department
          </label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-[#5F259F] hover:bg-[#7A4BCA] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Employee
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UpdateEmployee;
