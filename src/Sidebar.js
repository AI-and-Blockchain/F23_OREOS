import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </div>
      <div className="sidebar-icons">
        <Link to="/find-home">
          <i className="fa fa-home"></i>
        </Link>
        <Link to="/invest">
          <i className="fa fa-money"></i>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
