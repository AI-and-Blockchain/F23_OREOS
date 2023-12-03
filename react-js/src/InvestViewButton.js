import React from 'react';
import { useNavigate } from 'react-router-dom';

function InvestViewButton({ listingData }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/invest-property-view/${listingData.contractAddress}`, { state: { listingData } });
  };

  return (
    <button className="view-button" onClick={handleClick}>
      View
    </button>
  );
}

export default InvestViewButton;
