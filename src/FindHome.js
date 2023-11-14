import React from 'react';
import Listing from './Listing'; // Import the Listing component
import listingsData from './listings.json';

function FindHome() {
  return (
    <div className="find-home" style={{ paddingTop: '60px' }} >
      <h1>Find a Home</h1>
      <ul>
        {listingsData.map((listingData, index) => (
          <Listing key={index} listingData={listingData} />
        ))}
      </ul>
    </div>
  );
}

export default FindHome;
