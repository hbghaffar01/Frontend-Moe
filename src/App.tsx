import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Admin/Navbar";
import Sidebar from "./components/Admin/Sidebar";
import Dashbaord from "@/layouts/Dashbaord";
import Employee from "@/layouts/Employee";
import CalendarView from "@/layouts/CalendarView";

const App: React.FC = () => {
  return (
    <Router>
      <main className="m-0 p-0 flex">
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/Dashboard" />} />
            <Route path="/Dashboard" element={<Dashbaord />} />
            <Route path="/Dashboard/EmployeeDetails" element={<Employee />} />
            <Route path="/Dashboard/calendar" element={<CalendarView />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;