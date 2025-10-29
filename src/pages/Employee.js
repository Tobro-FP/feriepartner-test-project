import { useParams } from "react-router"
import EmployeeDetails from '../components/EmployeeDetails'
import EmployeeSelectList from "../components/EmployeeSelectList"
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
      <main>
        {employeesLoading && <p>Loading employee list...</p>}
        {!employeesLoading && employeesError && <p>Employee list could not be loaded.</p>}
        {employees && <EmployeeSelectList employees={employees} employeeId={id} />}

        {employeeLoading && <p>Loading employee...</p>}
        {!employeeLoading && employeeError && <p>An error has occurred and the details cannot be rendered.</p>}
        {employee && !employeeLoading && !employeeError && <EmployeeDetails details={employee} />}
      </main>
    </>
  )
}

export default Employee
