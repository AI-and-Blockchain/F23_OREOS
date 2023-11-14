import React from 'react';
import listingsData from './listings.json';

function FindHome() {
  return (
    <div className="find-home">
      <h1>Find a Home</h1>
      <ul>
        {listingsData.map((listingData, index) => (
          <li key={index}>
            <p>Address: {listingData.streetAddress}</p>
            <p>List Price: ${listingData.listPrice}</p>
            <p>Estimated Price: ${listingData.estimatedPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FindHome;
