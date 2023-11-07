import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindHome from './findhome';
import Invest from './Invest';
import Navbar from './NavBar';
import Sidebar from './Sidebar';
import './App.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/find-home" component={FindHome} />
          <Route path="/invest" component={Invest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
