import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-12">
      <Link to="/employees">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 hover:text-gray-700 cursor-pointer">Feriepartner</h1>
      </Link>
      <p className="text-xl text-gray-600">Your Gateway to Amazing Holidays</p>
    </div>
  );
};

export default Home;
