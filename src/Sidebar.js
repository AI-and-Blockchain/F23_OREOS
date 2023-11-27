import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import './App.css'; // Import your CSS file
import MetamaskLogo from './metamask.png'; // Replace with the actual path to your Metamask logo

function Sidebar({ onClose, onToggleSidebar, isOpen }) {
  const [sidebarOpen, setSidebarOpen] = useState(isOpen);

  useEffect(() => {
    setSidebarOpen(isOpen);
  }, [isOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    onClose(); // Close the sidebar when an option is selected
    onToggleSidebar(!sidebarOpen); // Toggle the sidebar in the parent component
  };

  const sidebarStyle = {
    left: sidebarOpen ? '0%' : '-25%', // Adjust the left position based on sidebarOpen state
  };

  const connectToMetamask = () => {
    // Add your Metamask connection logic here
    console.log('Connecting to Metamask...');
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

          {/* Connect to Metamask button with Metamask logo stacked on top */}
          <button className="connect-metamask-button" onClick={connectToMetamask}>
            <span>Connect to Metamask</span>
            <img src={MetamaskLogo} alt="Metamask" className="metamask-logo" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
