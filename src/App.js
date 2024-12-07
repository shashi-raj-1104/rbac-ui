import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import UserManagement from "./components/UserManagement/UserManagement.js";
import RoleManagement from "./components/RoleManagement/RoleManagement.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>RBAC Dashboard</h1>
          <nav>
            {/* NavLink automatically adds an 'active' class to the active route */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Users
            </NavLink>
            <NavLink to="/roles" className={({ isActive }) => (isActive ? "active" : "")}>
              Roles
            </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
