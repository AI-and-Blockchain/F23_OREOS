import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import FindHome from './FindHome';
import Invest from './Invest';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ViewProperties from './ViewProperties'; 
import HomeEvaluationForm from './HomeEvaluationForm'; 
import DeployProperty from './DeployProperty'; 
import { DataProvider } from './DataContext';
import PropertyView from './PropertyView';
import InvestPropertyView from './InvestPropertyView';
import { MetamaskProvider } from './MetaContext';
import './App.css'; // Import your CSS file

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <MetamaskProvider>
     <DataProvider>
    <div className="app">
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} onToggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/home-evaluation" element={<HomeEvaluationForm />} />
        <Route path="/deploy" element={<DeployProperty />} />
        <Route path="/find-home" element={<FindHome />} />
        <Route path="/invest" element={<Invest />} />
        <Route
            path="/property-view/:listingData"
            element={<PropertyView />}
         />
         <Route
            path="/invest-property-view/:listingData"
            element={<InvestPropertyView />}
         />
        <Route path="/view-properties" element={<ViewProperties />} />
        {/* Add the default route to navigate to /find-home */}
        <Route
          path="/"
          element={<Navigate to="/home-evaluation" />}
        />
      </Routes>
    </div>
    </DataProvider>
    </MetamaskProvider>
  );
}

export default App;
