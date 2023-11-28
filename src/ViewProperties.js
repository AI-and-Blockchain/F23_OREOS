import React, { useState, useEffect } from 'react';
import { useMetamask } from './MetaContext';
import './App.css';

function ViewProperties() {
  const { connectedAccount } = useMetamask();
  const [ownedProperties, setOwnedProperties] = useState([]);
  const [investedProperties, setInvestedProperties] = useState([]);

  // Fetch data or update state related to user's properties
  useEffect(() => {
    if (connectedAccount) {
        // Add logic to fetch or update properties data based on the connected account
        // For example, you might fetch data from a backend server or blockchain
        // and update the state with setOwnedProperties and setInvestedProperties
      }
    }, [connectedAccount]);

  const hasOwnedProperties = ownedProperties.length > 0;

  return (
    <div style={{ marginTop: '0px', padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>View Properties</h2>

      {/* Owned Properties Section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>Owned Properties</h3>
        {hasOwnedProperties ? (
          // Display a list of owned properties
          <ul>
            {ownedProperties.map((property) => (
              <li key={property.id}>{property.name}</li>
            ))}
          </ul>
        ) : (
          // Show a message and "Add Property" button if no owned properties
          <div>
            <p>You don't have any owned properties.</p>
            <button className="shared-button-style">Add Property</button>
          </div>
        )}
      </div>

      {/* Invested Properties Section */}
      <div>
        <h3>Invested Properties</h3>
        {/* Display a list of invested properties */}
        <ul>
          {investedProperties.map((property) => (
            <li key={property.id}>{property.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ViewProperties;
