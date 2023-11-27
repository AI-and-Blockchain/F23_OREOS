import React from 'react';
import { Link } from 'react-router-dom';
import FindHomeIcon from './findhome.png';
import InvestIcon from './invest.png';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

function Navbar({ onToggleSidebar }) {
  return (
    <div>
      <nav
        className="navbar"
        style={{
          position: 'fixed',
          width: '100%', // Adjust the width to cover the entire screen
          backgroundColor: 'black',
          color: 'white',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000, // Ensure the Navbar is on top
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            onClick={onToggleSidebar}
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '20px',
            }}
          >
            <FaBars />
          </div>
          <div style={{ fontSize: '36px', fontWeight: 'bold' }}>OREOS</div>
        </div>
        <div className="navbar-menu" style={{ display: 'flex' }}>
          <Link to="/find-home" className="navbar-menu-item">
            <img src={FindHomeIcon} alt="Find Home" style={{ width: '86px', height: '60px', marginBottom: '5px' }} />
            <p style={{ margin: '0', fontSize: '14px', paddingRight: '5px' }}>Find a Home</p>
          </Link>
          <Link to="/invest" className="navbar-menu-item">
            <img src={InvestIcon} alt="Invest" style={{ width: '86px', height: '60px', marginBottom: '5px', paddingRight: '50px' }} />
            <p style={{ margin: '0', fontSize: '14px', paddingLeft: '20px' }}>Invest</p>
          </Link>
        </div>
      </nav>
      <div onClick={onToggleSidebar} style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold', marginRight: '20px' }}>
      <FaBars />
    </div>

    </div>
  );
}

export default Navbar;
