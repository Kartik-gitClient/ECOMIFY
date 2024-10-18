import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RetireEmployee() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchEmployeeDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/fetch-employee/${employeeId}`);
      const data = await response.json();

      if (!response.ok) {
        setEmployeeDetails(null);
        throw new Error(data.error || 'Failed to fetch employee details');
      }
      
      setEmployeeDetails(data);
      setErrorMessage(''); 
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message || 'Error fetching employee details');
    }
  };

  const handleRetire = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/retire-employee/${employeeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to retire employee');
      }

      const result = await response.json();
      toast.success(result.message || 'Employee retired successfully!');

      setEmployeeId('');
      setEmployeeDetails(null);
    } catch (error) {
      toast.error(error.message || 'An error occurred while retiring the employee!');
    }
  };

  return (
    <div className="p-4 m-auto w-1/2">
      <h2 className="text-3xl font-bold text-[#5F259F] text-center mb-6">Retire Employee</h2>
      
      <div className="mb-4 ">
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
        onClick={fetchEmployeeDetails}
        className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Fetch Details
      </button>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {employeeDetails && (
        <div className="bg-white m-auto w-2/3 text-center p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold  mb-4">Employee Summary</h3>
          <table className="table-auto mb-4">
            <tbody>
              <tr>
                <td className="border px-4 py-2">ID</td>
                <td className="border px-4 py-2">{employeeDetails.id}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Name</td>
                <td className="border px-4 py-2">{employeeDetails.name}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Salary</td>
                <td className="border px-4 py-2">{employeeDetails.salary}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Department</td>
                <td className="border px-4 py-2">{employeeDetails.department}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">DOB</td>
                <td className="border px-4 py-2">{employeeDetails.dob}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Address</td>
                <td className="border px-4 py-2">{employeeDetails.address}</td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={handleRetire}
            className="bg-[#5F259F] hover:bg-[#7A4BCA] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Retire Employee
          </button>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
    </div>
  );
}

export default RetireEmployee;
