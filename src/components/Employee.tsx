import { useParams } from 'react-router-dom';

const Employee = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Displaying details for employee ID: {id}</p>
    </div>
  );
};

export default Employee;

