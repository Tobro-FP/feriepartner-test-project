import '../App.css'

function EmployeeDetails({ details }) {
  return (
    <ul>
      <li><img src={details.image} alt={details.name} /></li>
      <li>Name: {details.name}</li>
      <li>Position: {details.position}</li>
      <li>Department: {details.department}</li>
      <li>Email: {details.email}</li>
      <li>Phone: {details.phone}</li>
    </ul>
  )
}

export default EmployeeDetails
