import React, { useState } from 'react';
import InvestListing from './InvestListing'; // Import the InvestListing component
import listingsData from './listings.json';
import Predict from '../backend/predict.js';

function Invest() {
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  const uniqueAddresses = new Set();

  const filteredListings = listingsData.filter((listing) => {
    if (!uniqueAddresses.has(listing.location.address.line)) {
      uniqueAddresses.add(listing.location.address.line);
      return true;
    }
    return false;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    // Change 'listPrice' to the property you want to sort by
    const priceA = a.list_price;
    const priceB = b.list_price;

    if (sortOrder === 'original') return a.id - b.id; // Sort by the original listing id order

    if (sortOrder === 'asc') {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => {
      if (prevSortOrder === 'asc') return 'desc';
      if (prevSortOrder === 'desc') return 'original'; // Add a third state for original order
      return 'asc';
    });
  };

  return (
    <div className='invest' style={{ paddingTop: '80px' }}>
      <h1>Invest</h1>
      <Predict />
      <button
        onClick={toggleSortOrder}
        style={{
          fontWeight: 'bold',
          padding: '8px 16px', // Add horizontal padding for a pill shape
          borderRadius: '20px', // Add border radius for a pill shape
          cursor: 'pointer',
        }}
      >
        {`Sort by List Price: ${
          sortOrder === 'asc'
            ? 'Low to High'
            : sortOrder === 'desc'
            ? 'High to Low'
            : 'None'
        }`}
      </button>
      <ul>
        {sortedListings.map((listingData, index) => (
          <InvestListing key={index} listingData={listingData} />
        ))}
      </ul>
    </div>
  )
}

export default Invest;
