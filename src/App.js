import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FindHome from './FindHome';
import Invest from './Invest';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/find-home" element={<FindHome />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
    </div>
  );
}

export default App;
