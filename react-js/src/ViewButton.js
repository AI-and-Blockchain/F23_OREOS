import React from 'react';
import { useNavigate } from 'react-router-dom';

function ViewButton({ listingData }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/property-view/${listingData.id}`, { state: { listingData } });
  };

  return (
    <button className="view-button" onClick={handleClick}>
      View
    </button>
  );
}

export default ViewButton;
