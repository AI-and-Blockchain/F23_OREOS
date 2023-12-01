import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import FindHome from './FindHome';
import Invest from './Invest';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ViewProperties from './ViewProperties'; 
import HomeEvaluationForm from './HomeEvaluationForm'; 
import PropertyView from './PropertyView';
import { MetamaskProvider } from './MetaContext';
import './App.css'; // Import your CSS file

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <MetamaskProvider>
    <div className="app">
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} onToggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/home-evaluation" element={<HomeEvaluationForm />} />
        <Route path="/find-home" element={<FindHome />} />
        <Route path="/invest" element={<Invest />} />
        <Route
            path="/property-view/:listingData"
            element={<PropertyView />}
         />
        <Route path="/view-properties" element={<ViewProperties />} />
        {/* Add the default route to navigate to /find-home */}
        <Route
          path="/"
          element={<Navigate to="/find-home" />}
        />
      </Routes>
    </div>
    </MetamaskProvider>
  );
}

export default App;
