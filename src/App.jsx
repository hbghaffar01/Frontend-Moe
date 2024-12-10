import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Admin/Navbar.jsx";
import Sidebar from "./components/Admin/Sidebar.jsx";
import Dashboard from "./layouts/Dashbaord.jsx";
import Employee from "./layouts/Employee.jsx";
import CalendarView from "./layouts/CalendarView.jsx";
import Leave from "./layouts/leaves.jsx";

const App = () => {
  return (
    <Router>
      <main className="m-0 p-0 flex items-center overflow-y-hidden">
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Dashboard/EmployeeDetails" element={<Employee />} />
            <Route path="/Dashboard/calendar" element={<CalendarView />} />
            <Route path="/Dashboard/Leave" element={<Leave />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
