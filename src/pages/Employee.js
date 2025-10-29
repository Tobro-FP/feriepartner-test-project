import { useParams } from "react-router"
import EmployeeDetails from '../components/EmployeeDetails'
import EmployeeSelectList from "../components/EmployeeSelectList"
import ComponentLoadError from "../components/ComponentLoadError"
import useEmployees from "../hooks/useEmployees"

function Employee() {
  const { id } = useParams()

  // fetch full list for the select
  const { data: employees, isLoading: employeesLoading, error: employeesError } = useEmployees()

  // fetch single employee for details
  const { data: employee, isLoading: employeeLoading, error: employeeError } = useEmployees(id)

  return (
    <>
      <header>
        <h1>Employee</h1>
      </header>
      <main className="flex flex-col items-center">
        {employeesLoading && <p className="mt-8">Loading employee list...</p>}
        {!employeesLoading && employeesError && <ComponentLoadError componentName={'employees list'} />}
        {employees && <EmployeeSelectList employees={employees} employeeId={id} />}

        {employeeLoading && <p className="mt-8">Loading employee...</p>}
        {!employeeLoading && (employeeError || (id && !employee)) && <ComponentLoadError componentName={'employee details'} />}
        {employee && !employeeLoading && !employeeError && <EmployeeDetails details={employee} />}
      </main>
    </>
  )
}

export default Employee
