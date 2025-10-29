import EmployeeSelectList from "../components/EmployeeSelectList"
import useEmployees from "../hooks/useEmployees"

function Employees() {
  const { data, isLoading, error } = useEmployees();

  return (
    <>
      <header>
        <h1>Employees</h1>
      </header>
      <main>
        {isLoading && <p>Loading employee list...</p>}
        {!isLoading && error && <p>An error has occurred and the list can not be rendered.</p>}
        {data && !isLoading && !error && <EmployeeSelectList employees={data} />}
      </main>
    </>
  )
}

export default Employees
