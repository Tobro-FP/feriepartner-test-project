import EmployeeSelectList from "../components/EmployeeSelectList"
import ComponentLoadError from "../components/ComponentLoadError"
import useEmployees from "../hooks/useEmployees"

function Employees() {
  const { data, isLoading, error } = useEmployees();

  return (
    <>
      <header>
        <h1>Employees</h1>
      </header>
      <main>
        {isLoading && <p className="mt-8">Loading employee list...</p>}
        {!isLoading && error && <ComponentLoadError componentName={'employees list'} />}
        {data && !isLoading && !error && <EmployeeSelectList employees={data} />}
      </main>
    </>
  )
}

export default Employees
