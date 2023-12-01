import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Web3 from 'web3'; // Import Web3 library
import { Link } from 'react-router-dom';
import './App.css'; // Import your CSS file
import MetamaskLogo from './metamask.png'; 
import MetamaskLogo2 from './metamask2.png'; 
function Sidebar({ onClose, onToggleSidebar, isOpen }) {
  const [sidebarOpen, setSidebarOpen] = useState(isOpen);
  const [web3, setWeb3] = useState(null);
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);

  useEffect(() => {
    setSidebarOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    // Check if Metamask is installed
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.log('Metamask is not installed.');
    }
  }, []);

  useEffect(() => {
    // Check if Metamask is connected
    setIsMetamaskConnected(web3 && web3.currentProvider.connected);
  }, [web3]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    onClose(); // Close the sidebar when an option is selected
    onToggleSidebar(!sidebarOpen); // Toggle the sidebar in the parent component
  };

  const sidebarStyle = {
    left: sidebarOpen ? '0' : '-25%', // Adjust the left position based on sidebarOpen state
  };

  const connectToMetamask = async () => {
    if (!web3) {
      console.log('Web3 not initialized.');
      return;
    }

    try {
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to Metamask.');
      // Now you can use web3 to interact with the user's wallet
      setIsMetamaskConnected(true);
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} style={sidebarStyle}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      {sidebarOpen && (
        <div className="sidebar-content">
          <p>Login</p>
          {isMetamaskConnected ? (
            <Link to="/view-properties" className="shared-button-style">
              <span>View Properties</span>
              <img src={MetamaskLogo2} alt="Metamask" className="metamask-logo" />
            </Link>
          ) : (
            <button className="shared-button-style" onClick={connectToMetamask}>
              <span>Connect to Metamask</span>
              <img src={MetamaskLogo} alt="Metamask" className="metamask-logo" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
