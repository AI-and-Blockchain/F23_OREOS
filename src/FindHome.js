import React from 'react';

function FindHome({ properties }) {
  return (
    <div className="find-home">
      <h1>Find a Home</h1>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <img src={property.image} alt={`Property ${index}`} />
            <p>List Price: ${property.listPrice}</p>
            <p>Estimated Price: ${property.estimatedPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FindHome;
