import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Employee } from "../types/Employee";

const Employees = () => {
  const { data, isLoading, error } = useFetch<Employee[]>(
    "http://localhost:3001/employees"
  );
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>("");

  if (isLoading) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Employees</h1>
        <p className="text-gray-600">Loading employees...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Employees</h1>
        <p className="text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Employees</h1>

      <div className="mb-4">
        <label
          htmlFor="employee-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select an employee:
        </label>
        <select
          id="employee-select"
          value={selectedEmployeeId}
          onChange={(e) => setSelectedEmployeeId(e.target.value)}
          className="block w-full max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
        >
          <option value="">-- Choose an employee --</option>
          {data?.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name} - {employee.position}
            </option>
          ))}
        </select>
      </div>

      {selectedEmployeeId && (
        <div className="mt-6">
          <p className="text-gray-600">
            Selected employee ID: {selectedEmployeeId}
          </p>
        </div>
      )}
    </div>
  );
};

export default Employees;
