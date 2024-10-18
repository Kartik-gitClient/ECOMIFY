import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const SortEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/view-employees');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch employees');
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      toast.error(error.message || 'An error occurred while fetching employees!');
    }
  };

  const handleSort = () => {
    let sortedEmployees = [...employees];

    if (sortOrder === 'asc') {
      sortedEmployees.sort((a, b) => a.salary - b.salary);
    } else if (sortOrder === 'desc') {
      sortedEmployees.sort((a, b) => b.salary - a.salary);
    }

    setEmployees(sortedEmployees);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-[#5F259F] text-center mb-6">Sort Employees by Salary</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sortOrder">
          Sort by Salary
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Order</option>
          <option value="asc">Ascending Salary</option>
          <option value="desc">Descending Salary</option>
        </select>
      </div>
      <button
        onClick={handleSort}
        className="bg-[#5F259F] hover:bg-[#7A4BCA] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sort Employees
      </button>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Sorted Employees</h3>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">ID</th>
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Salary</th>
              <th className="border border-gray-200 px-4 py-2">Department</th>
              <th className="border border-gray-200 px-4 py-2">DOB</th>
              <th className="border border-gray-200 px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="border border-gray-200 px-4 py-2">{employee.id}</td>
                <td className="border border-gray-200 px-4 py-2">{employee.name}</td>
                <td className="border border-gray-200 px-4 py-2">${employee.salary}</td>
                <td className="border border-gray-200 px-4 py-2">{employee.department}</td>
                <td className="border border-gray-200 px-4 py-2">{employee.dob}</td>
                <td className="border border-gray-200 px-4 py-2">{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SortEmployees;
