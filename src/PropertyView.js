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
      <img src={listingData.primary_photo.href} alt="Property" style={{ width: '400px', height: '280px' }} />
      <p style={{ fontSize: '28px', fontWeight: 'bold', margin: '0' }}>Address: {listingData.location.address.line}</p>
      <p>{listingData.location.address.city} {listingData.location.address.state},</p>
        <p> {listingData.location.address.postal_code}</p>
        <p style={{ fontSize: '26px', fontWeight: 'bold', margin: '0' }}>List Price: ${listingData.list_price}</p>
      <p style={{ color: getSoldPriceColor(listingData), margin: '0' }}>Sold Price: ${listingData.description.sold_price}</p>
      <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}> Details:</p>
      <p>Beds: {listingData.description.beds} </p>
      <p>Baths: {listingData.description.baths_consolidated} </p>
      <p>Sqft: {listingData.description.sqft} </p>
      <p>Lot: {listingData.description.lot_sqft} </p>
      <p>{listingData.description.type} </p>
      <p><a href={listingData.location.street_view_url}>Street View</a> </p>
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
export default PropertyView;
