import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 h-16">
          <Link to="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
            Home
          </Link>
          <Link to="/employees" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
            Employees
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
