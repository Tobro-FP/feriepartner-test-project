import { Employee } from "../types/Employee";

type EmployeeDetailsProps = {
  employee: Employee;
};

export const EmployeeDetails = ({ employee }: EmployeeDetailsProps) => {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Employee Details</h2>
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
};
