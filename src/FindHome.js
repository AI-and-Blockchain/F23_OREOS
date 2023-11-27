import React, { useState } from 'react';
import Listing from './Listing';
import listingsData from './listings.json';

function FindHome() {
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => {
      if (prevSortOrder === 'original') return 'desc';
      if (prevSortOrder === 'desc') return 'asc';
      return 'original';
    });
  };

  // Create a set to keep track of unique addresses
  const uniqueAddresses = new Set();

  // Filter out duplicate listings based on address
  const filteredListings = listingsData.filter((listing) => {
    if (!uniqueAddresses.has(listing.location.address.line)) {
      uniqueAddresses.add(listing.location.address.line);
      return true;
    }
    return false;
  });

  // Sort the filtered listings based on the difference between estimatePrice and listPrice
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortOrder === 'original') return a.property_id - b.property_id;
    const orderFactor = sortOrder === 'asc' ? 1 : -1;
    const differenceA = a.description.sold_price - a.list_price;
    const differenceB = b.description.sold_price - b.list_price;
    return orderFactor * (differenceA - differenceB);
  });

  return (
    <div className="find-home" style={{ paddingTop: '80px' }}>
      <h1>Find a Home</h1>
      <button
        onClick={toggleSortOrder}
        style={{
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        {`Sort by Difference: ${sortOrder === 'desc' ? 'High to Low' : sortOrder === 'asc' ? 'Low to High' : 'None'}`}
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