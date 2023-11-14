import React from 'react';
import listingsData from './listings.json';

function Invest() {
  return (
    <div className="invest">
      <h1>Invest</h1>
      <ul>
        {listingsData.map((listingData, index) => (
          <li key={index}>
          <p>Address: {listingData.streetAddress}</p>
          <p>List Price: ${listingData.listPrice}</p>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Invest;
