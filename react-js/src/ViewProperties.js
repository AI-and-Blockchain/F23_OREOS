import React, { useState, useEffect } from 'react';
import { useMetamask } from './MetaContext';
import { Link } from 'react-router-dom';
import InvestListing from './InvestListing';
import './App.css';

function ViewProperties() {
  const { connectedAccount } = useMetamask();
  const [ownedProperties, setOwnedProperties] = useState([]);
  const [investedProperties, setInvestedProperties] = useState([]);

  // Fetch data or update state related to user's properties
  useEffect(() => {
    const fetchData = async () => {
      console.log(connectedAccount);
      if (connectedAccount) {
        // Fetch 'investListings' data from localStorage
        const allProperties = await fetchInvestListings();

        // Filter properties based on ownership
        const userOwnedProperties = allProperties.filter(property => property.owner === connectedAccount);
        setOwnedProperties(userOwnedProperties);

        // Filter properties based on investment (customize as needed)
        //const userInvestedProperties = allProperties.filter(property => property.details.investors.includes(connectedAccount));
        //setInvestedProperties(userInvestedProperties);
      }
    };

    fetchData();
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
            {ownedProperties.map((property, index) => (
              <InvestListing key={index} listingData={property} />
            ))}
          </ul>
        ) : (
          // Show a message and "Add Property" button if no owned properties
          <div>
            <p>You don't have any owned properties.</p>
            <Link to="/home-evaluation" style={{ marginLeft: '20px', textDecoration: 'none', color: 'white' }}>
            <button className="shared-button-style">
              Add Property
            </button>
          </Link>
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


// Helper function to fetch 'investListings' data from localStorage
const fetchInvestListings = async () => {
  try {
    // Retrieve 'investListings' data from localStorage
    const investListingsData = localStorage.getItem('investListings');
    
    // Parse JSON data
    const jsonData = JSON.parse(investListingsData);

    // Return the data if available, otherwise an empty array
    return jsonData || [];
  } catch (error) {
    console.error('Error fetching investListings data:', error);
    return [];
  }
};

export default ViewProperties;
