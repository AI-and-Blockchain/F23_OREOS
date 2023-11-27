import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './App.css'; // Import your CSS file

function Sidebar({ onClose }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    onClose(); // Close the sidebar when an option is selected
  };

  const sidebarStyle = {
    left: sidebarOpen ? '0' : '-25%', // Adjust the left position based on sidebarOpen state
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} style={sidebarStyle}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      {sidebarOpen && (
        <div className="sidebar-content">
          {/* Add your login options or any other content here */}
          <p>Login</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
