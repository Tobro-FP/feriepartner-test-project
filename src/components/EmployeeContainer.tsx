import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Employee } from "../types/Employee";
import { EmployeeDetails } from "./EmployeeDetails";
import { EmployeeList } from "./EmployeeList";

/**
 * This component is responsible for the page layout and title.
 * It is used by the EmployeeContainer component.
 */
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Employees</h1>
    {children}
  </div>
);

// Could be an ENV variable:
const API_URL = "http://localhost:3001/employees";

/**
 * This component is responsible for fetching the employee data and managing the state of the selected employee.
 * It also handles the routing and navigation between the employee list and the employee details.
 */
export const EmployeeContainer = () => {
  const { id: urlId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch<Employee[]>(API_URL);

  // Memoize handleEmployeeSelect
  const handleEmployeeSelect = useCallback(
    (employeeId: string | null) => {
      employeeId ? navigate(`/employees/${employeeId}`) : navigate(`/employees`);
    },
    [navigate]
  );

  // Memoize selectedEmployee and selectedId
  const selectedEmployee = useMemo(() => (urlId ? data?.find((emp) => String(emp.id) === urlId) : null), [urlId, data]);
  const selectedId = useMemo(() => (selectedEmployee ? String(selectedEmployee.id) : null), [selectedEmployee]);

  // Handle loading state
  if (isLoading) {
    return (
      <PageLayout>
        <p className="text-gray-600">Loading employees...</p>
      </PageLayout>
    );
  }

  // Handle error state
  if (error) {
    return (
      <PageLayout>
        <p className="text-red-600">Error loading employees: {error.message}</p>
      </PageLayout>
    );
  }

  // Handle no data state
  if (!data || data.length === 0) {
    return (
      <PageLayout>
        <p className="text-gray-600">No employees found.</p>
      </PageLayout>
    );
  }

  // Handle invalid ID in URL
  if (urlId && !selectedEmployee) {
    return (
      <PageLayout>
        <EmployeeList employees={data} selectedId={null} onSelect={handleEmployeeSelect} />
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">
            Employee with ID {urlId} not found. Please select an employee from the dropdown.
          </p>
        </div>
      </PageLayout>
    );
  }

  // Valid ID in URL
  return (
    <PageLayout>
      <EmployeeList employees={data} selectedId={selectedId} onSelect={handleEmployeeSelect} />
      {selectedEmployee && <EmployeeDetails employee={selectedEmployee} />}
    </PageLayout>
  );
};
