import React from 'react';

function Invest({ properties }) {
  return (
    <div className="invest">
      <h1>Invest</h1>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <img src={property.image} alt={`Property ${index}`} />
            <p>Share Cost: ${property.shareCost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Invest;
