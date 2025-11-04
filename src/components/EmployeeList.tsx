import { memo, useCallback } from "react";
import { Employee } from "../types/Employee";

/**
 * Props are not exported in this demo.
 */
type EmployeeListProps = {
  employees: Employee[];
  selectedId: string | null;
  onSelect: (employeeId: string | null) => void;
};

export const EmployeeList = memo(({ employees, selectedId, onSelect }: EmployeeListProps) => {
  // Memoize handleChange
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      onSelect(value || null);
    },
    [onSelect]
  );

  return (
    <div className="mb-6">
      <label htmlFor="employee-select" className="block text-sm font-medium text-gray-700 mb-2">
        Select an employee:
      </label>
      <select
        id="employee-select"
        value={selectedId ?? ""}
        onChange={handleChange}
        className="block w-full max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
      >
        <option value="">-- Choose an employee --</option>
        {employees.map((employee) => (
          <option key={employee.id} value={String(employee.id)}>
            {employee.name} - {employee.position}
          </option>
        ))}
      </select>
    </div>
  );
});

EmployeeList.displayName = "EmployeeList";
