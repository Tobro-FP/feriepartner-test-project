import '../App.css'
import { useNavigate } from "react-router"


function EmployeeSelectList({ employees, employeeId }) {
  const navigate = useNavigate()

  const handleSelectChange = (event) => {
    navigate(`/employee/${event.target.value}`)
  }

  const selectedValue = employeeId != null ? String(employeeId) : ''

  return (
    <>
      <select
        name="employee-list"
        id="employee-list"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value='' disabled hidden>Choose an employee</option>
        {employees.map((employee) => (
          <option key={employee.id} value={String(employee.id)}>
            {employee.name}
          </option>
        ))}
      </select >
    </>
  )
}

export default EmployeeSelectList
