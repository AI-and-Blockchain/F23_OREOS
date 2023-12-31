import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function InvestPropertyView() {
  const { state } = useLocation();
  const defaultImageUrl = 'data:image/png;base64,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';

  if (!state || !state.listingData) {
    // Handle case where listingData is not found, e.g., show an error message or redirect
    return (
      <div>
        <p>Property not found</p>
      </div>
    );
  }

  const listingData = state.listingData;

  const handleBuyShare = async () => {
    // Implement the logic for buying a share
    console.log('Buying a share');
  };

  const handlePlaceBid = async () => {
    // Implement the logic for placing a bid
    console.log('Placing a bid');
  };

  return (
    <div style={{ marginTop: '0px', padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Investment Property Details</h2>
      <img src={defaultImageUrl || listingData.imageURl} alt="Property" style={{ width: '300px', height: '280px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '400px' }}>
        <div style={{ textAlign: 'left', width: '200px' }}>
          <p style={{ fontSize: '28px', fontWeight: 'bold', margin: '0' }}>Address: {listingData.details.address}</p>
          <p>{listingData.details.city} {listingData.details.state},</p>
          <p style={{ fontSize: '26px', fontWeight: 'bold', margin: '0' }}>List Price: ${listingData.details.listPrice}</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}> Details:</p>
          <p>Beds: {listingData.details.beds} </p>
          <p>Baths: {listingData.details.baths} </p>
          <p>Sqft: {listingData.details.sqft} </p>
          <p>Lot: {listingData.details.lotSqft} </p>
        </div>

        <div style={{ textAlign: 'left', width: '200px' }}>
          <p style={{ fontSize: '26px', fontWeight: 'bold', margin: '0' }}> Share Price: ${listingData.sharePrice} </p>
          <div style= {{paddingTop: '20px'}}></div>
          <button className = "view-button" onClick={handleBuyShare}>Buy a Share</button>
          <button className = "view-button" onClick={handlePlaceBid}>Place Bid</button>
        </div>
      </div>
    </div>
  );
}


export default InvestPropertyView;
