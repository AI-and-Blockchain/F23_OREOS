import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import FindHome from './FindHome';
import Invest from './Invest';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PropertyView from './PropertyView';
import './App.css'; // Import your CSS file

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <div className="app">
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} onToggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/find-home" element={<FindHome />} />
        <Route path="/invest" element={<Invest />} />
        <Route
            path="/property-view/:listingData"
            element={<PropertyView />}
         />
        {/* Add the default route to navigate to /find-home */}
        <Route
          path="/"
          element={<Navigate to="/find-home" />}
        />
      </Routes>
    </div>
  );
}

export default App;
