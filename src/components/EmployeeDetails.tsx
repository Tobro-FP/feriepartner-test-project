import { memo } from "react";
import { Employee } from "../types/Employee";

/**
 * Props are not exported by default as they're only used internally.
 * Export them if we need to:
 * - Write unit tests that need to mock these props
 * - Reuse the type definition in other components
 * - Create wrapper components that extend these props
 */
type EmployeeDetailsProps = {
  employee: Employee;
};

export const EmployeeDetails = memo(({ employee }: EmployeeDetailsProps) => {
  /**
   * Naturally, it is possible to fetch individual employee data
   * from the API using the 'http://localhost:3001/employees/:id' path.
   * However, since we already have the data, it's more efficient
   * in this case to pass it as a prop. There are cases where it
   * will be more efficient to fetch an individual employee's data,
   * e.g. if the user navigates directly to an employee's page.
   */
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Employee Details</h2>
      <div className="mb-6">
        <img src={employee.image} alt={employee.name} className="w-48 h-48 object-cover rounded-lg shadow-md" />
      </div>
      <div className="space-y-3">
        <div>
          <span className="font-semibold text-gray-700">Name:</span>{" "}
          <span className="text-gray-900">{employee.name}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Position:</span>{" "}
          <span className="text-gray-900">{employee.position}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Department:</span>{" "}
          <span className="text-gray-900">{employee.department}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          <span className="text-gray-900">{employee.email}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Phone:</span>{" "}
          <span className="text-gray-900">{employee.phone}</span>
        </div>
      </div>
    </div>
  );
});

EmployeeDetails.displayName = "EmployeeDetails";
