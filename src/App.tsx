import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeContainer from "./components/EmployeeContainer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees/:id?" element={<EmployeeContainer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
