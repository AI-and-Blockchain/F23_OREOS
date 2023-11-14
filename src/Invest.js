// Invest.js
import React from 'react';
import InvestListing from './InvestListing'; // Import the InvestListing component
import listingsData from './listings.json';

function Invest() {
  return (
    <div className="invest" style={{ paddingTop: '80px' }}>
      <h1>Invest</h1>
      <ul>
        {listingsData.map((listingData, index) => (
          <InvestListing key={index} listingData={listingData} />
        ))}
      </ul>
    </div>
  );
}

export default Invest;
