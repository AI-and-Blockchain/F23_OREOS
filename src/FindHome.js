import React, { useState } from 'react';
import Listing from './Listing'; // Import the Listing component
import listingsData from './listings.json';

function FindHome() {
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => {
      if (prevSortOrder === 'original') return 'desc';
      if (prevSortOrder === 'desc') return 'asc'; // Add a third state for original order
      return 'original';
    });
  };

  // Sort the listings based on the difference between estimatePrice and listPrice
  const sortedListings = [...listingsData].sort((a, b) => {
    if (sortOrder === 'original') return a.id - b.id; // Sort by the original listing id order
    const orderFactor = sortOrder === 'asc' ? 1 : -1;
    const differenceA = a.estimatePrice - a.listPrice;
    const differenceB = b.estimatePrice - b.listPrice;
    return orderFactor * (differenceA - differenceB);
  });

  return (
    <div className="find-home" style={{ paddingTop: '80px' }}>
      <h1>Find a Home</h1>
      <button
        onClick={toggleSortOrder}
        style={{
          fontWeight: 'bold',
          padding: '8px 16px', // Add horizontal padding for a pill shape
          borderRadius: '20px', // Add border radius for a pill shape
          cursor: 'pointer',
        }}
      >
        {`Sort by Difference: ${sortOrder === 'asc' ? 'Low to High' : sortOrder === 'desc' ? 'High to Low' : 'Original Order'}`}
      </button>
      <ul>
        {sortedListings.map((listingData, index) => (
          <Listing key={index} listingData={listingData} />
        ))}
      </ul>
    </div>
  );
}

export default FindHome;
