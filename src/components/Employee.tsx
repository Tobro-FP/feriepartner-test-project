import { useParams } from "react-router-dom";

const Employee = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Employee Details
      </h1>
      <p className="text-gray-600">
        Displaying details for employee ID:{" "}
        <span className="font-semibold text-gray-900">{id}</span>
      </p>
    </div>
  );
};

export default Employee;
