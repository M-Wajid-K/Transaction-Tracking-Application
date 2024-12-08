import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 text-white bg-gray-800">
      <nav className="flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
