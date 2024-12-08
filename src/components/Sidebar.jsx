import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4 text-white">
      <nav className="space-y-4">
        <Link to="/dashboard" className="block py-2">Dashboard</Link>
        <Link to="/reports" className="block py-2">Reports</Link>
        <Link to="/settings" className="block py-2">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar; 