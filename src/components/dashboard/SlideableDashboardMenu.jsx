import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChartPie, FaMoneyBill, FaClipboardList, FaCog, FaBell, FaUser, FaSignOutAlt, FaQuestionCircle, FaSun } from 'react-icons/fa';

const SlideableDashboardMenu = () => {
  const menuItems = [
    { text: "Dashboard Overview", path: "/dashboard", icon: <FaChartPie /> },
    {
      text: "Transactions",
      path: "/transactions",
      icon: <FaClipboardList />, 
      subItems: [
        { text: "View All Transactions", path: "/transactions/view" },
        { text: "Add New Transaction", path: "/transactions/add" },
      ],
    },
    {
      text: "Reports",
      path: "/reports",
      icon: <FaMoneyBill />, 
      subItems: [
        { text: "Income vs. Expense Analysis", path: "/reports/income-expense" },
        { text: "Category-wise Spending Patterns", path: "/reports/category-spending" },
        { text: "Trends Over Time", path: "/reports/trends" },
      ],
    },
    {
      text: "Budget",
      path: "/budget",
      icon: <FaMoneyBill />, 
      subItems: [
        { text: "Set Monthly Budget", path: "/budget/set" },
        { text: "Monitor Budget Progress", path: "/budget/monitor" },
      ],
    },
    {
      text: "Goals",
      path: "/goals",
      icon: <FaCog />, 
      subItems: [
        { text: "Create New Goal", path: "/goals/create" },
        { text: "Track Savings Goals", path: "/goals/track" },
        { text: "Edit/Delete Goals", path: "/goals/edit" },
      ],
    },
    {
      text: "Profile & Settings",
      path: "/profile",
      icon: <FaUser />, 
      subItems: [
        { text: "Update Profile Information", path: "/profile/update" },
        { text: "Change Password", path: "/profile/change-password" },
        { text: "Set Preferences", path: "/profile/preferences" },
      ],
    },
    {
      text: "Export/Import",
      path: "/export-import",
      icon: <FaClipboardList />, 
      subItems: [
        { text: "Export Transactions", path: "/export-import/export" },
        { text: "Import Bank Statements", path: "/export-import/import" },
      ],
    },
    {
      text: "Notifications",
      path: "/notifications",
      icon: <FaBell />, 
      subItems: [
        { text: "View Alerts", path: "/notifications/view" },
        { text: "Configure Notification Preferences", path: "/notifications/configure" },
      ],
    },
    { text: "Dark/Light Mode", path: "/theme", icon: <FaSun /> },
    {
      text: "Help & Support",
      path: "/help",
      icon: <FaQuestionCircle />, 
      subItems: [
        { text: "FAQ", path: "/help/faq" },
        { text: "Contact Support", path: "/help/contact" },
      ],
    },
    { text: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="flex flex-col h-full sticky top-0">
      <div className="p-4">
        <div className="drawer-content">
          <h2 className="text-xl font-bold">TT App</h2>
          <ul className="mt-4">
            {menuItems.map((item) => (
              <li key={item.text} className="mb-2">
                <Link to={item.path} className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200">
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </Link>
                {item.subItems && (
                  <ul className="ml-4">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.text}>
                        <Link to={subItem.path} className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200">
                          <span>{subItem.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideableDashboardMenu;
