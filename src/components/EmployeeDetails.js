import '../App.css'

function EmployeeDetails({ details }) {
  return (
    <div className='flex space-x-4 items-center mt-8'>
      <img src={details.image} alt={details.name} className='rounded-full' />
      <ul>
        <li>
          <span className='profile-label'>Name: </span>
          <span className='profile-value'>{details.name}</span>
        </li>
        <li>
          <span className='profile-label'>Position: </span>
          <span className='profile-value'>{details.position}</span>
        </li>
        <li>
          <span className='profile-label'>Department: </span>
          <span className='profile-value'>{details.department}</span>
        </li>
        <li>
          <span className='profile-label'>Email: </span>
          <span className='profile-value'>{details.email}</span>
        </li>
        <li>
          <span className='profile-label'>Phone: </span>
          <span className='profile-value'>{details.phone}</span>
        </li>
      </ul>
    </div>
  )
}

export default EmployeeDetails
