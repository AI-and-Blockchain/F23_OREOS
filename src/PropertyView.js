import React from 'react';
import { useLocation } from 'react-router-dom';

function PropertyView() {
  const { state } = useLocation();

  if (!state || !state.listingData) {
    // Handle case where listingData is not found, e.g., show an error message or redirect
    return (
      <div>
        <p>Property not found</p>
      </div>
    );
  }

  const listingData = state.listingData;

  return (
    <div style={{ position: 'absolute', top: '60px', left: 0, right: 0, margin: '20px' }}>
      <h2>Property Details</h2>
      <img src={listingData.image} alt="Property" style={{ width: '700px', height: '450px' }} />
      <p>Address: {listingData.streetAddress}</p>
      <p>List Price: ${listingData.listPrice}</p>
      <p>Estimated Price: ${listingData.estimatePrice}</p>
    </div>
  );
}

export default PropertyView;
