import React, { useState } from 'react';
import InvestListing from './InvestListing'; // Import the InvestListing component
import listingsData from './investListings.json';

function Invest() {
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  const uniqueAddresses = new Set();
  const allProperties =  fetchInvestListings();
  console.log(allProperties);
  const filteredListings = listingsData.filter((listing) => {
    if (!uniqueAddresses.has(listing.details.address)) {
      uniqueAddresses.add(listing.details.address);
      return true;
    }
    return false;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    // Change 'listPrice' to the property you want to sort by
    const priceA = a.details.listPrice;
    const priceB = b.details.listPrice;

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
    <div className="invest" style={{ paddingTop: '80px' }}>
      <h1>Invest</h1>
      <button
        onClick={toggleSortOrder}
        style={{
          fontWeight: 'bold',
          padding: '8px 16px', // Add horizontal padding for a pill shape
          borderRadius: '20px', // Add border radius for a pill shape
          cursor: 'pointer',
        }}
      >
        {`Sort by List Price: ${sortOrder === 'asc' ? 'Low to High' : sortOrder === 'desc' ? 'High to Low' : 'None'}`}
      </button>
      <ul>
        {sortedListings.map((listingData, index) => (
          <InvestListing key={index} listingData={listingData} />
        ))}
      </ul>
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

export default Invest;
