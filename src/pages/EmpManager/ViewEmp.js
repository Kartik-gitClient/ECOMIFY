import React, { useEffect, useState } from 'react';

function ViewEmp() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/view-employees');
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl text-center font-bold text-[#5F259F] mb-6">Employee List</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold">ID</th>
              <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold">Name</th>
              <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold">Salary</th>
              <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold">Department</th>
              <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold">DOB</th>
              <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold">Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.id}
                className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="py-3 px-4 border border-gray-300">{employee.id}</td>
                <td className="py-3 px-4 border border-gray-300">{employee.name}</td>
                <td className="py-3 px-4 border border-gray-300">{employee.salary}</td>
                <td className="py-3 px-4 border border-gray-300">{employee.department}</td>
                <td className="py-3 px-4 border border-gray-300">{employee.dob}</td>
                <td className="py-3 px-4 border border-gray-300">{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default ViewEmp;
