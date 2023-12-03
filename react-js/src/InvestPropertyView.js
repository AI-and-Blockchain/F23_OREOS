import React from 'react';
import { useLocation } from 'react-router-dom';

function InvestPropertyView() {
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
    <div  style={{ marginTop: '0px', padding: '100px' }}>
      <h2>Property Details</h2>
      <img src={listingData.imageURL} alt="Property" style={{ width: '400px', height: '280px' }} />
      <p style={{ fontSize: '28px', fontWeight: 'bold', margin: '0' }}>Address: {listingData.details.address}</p>
      <p>{listingData.details.city} {listingData.details.state},</p>
        <p style={{ fontSize: '26px', fontWeight: 'bold', margin: '0' }}>List Price: ${listingData.details.listPrice}</p>
      <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}> Details:</p>
      <p>Beds: {listingData.details.beds} </p>
      <p>Baths: {listingData.details.baths} </p>
      <p>Sqft: {listingData.details.sqft} </p>
      <p>Lot: {listingData.details.lotSqft} </p>
    </div>
  );
}


function getSoldPriceColor(listingData) {
    const difference = (listingData.description.sold_price || listingData.list_price) - listingData.list_price;
  
    if (Math.abs(difference) <= 5000) {
      return 'yellow';
    } else if (difference > 0) {
      return 'green';
    } else {
      return 'red';
    }
  }
export default InvestPropertyView;
