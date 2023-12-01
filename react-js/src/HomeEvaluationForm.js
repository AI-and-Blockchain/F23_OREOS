import React, { useState } from 'react';

const HomeEvaluationForm = () => {
  const [address, setAddress] = useState('');
  const [sqft, setSqft] = useState('');
  const [baths, setBaths] = useState('');
  const [lotSqft, setLotSqft] = useState('');
  const [beds, setBeds] = useState('');
  const [listPrice, setListPrice] = useState('');
  const [state, setState] = useState('');
  const [county, setCounty] = useState('');
  const [city, setCity] = useState('');
  const [predictedValue, setPredictedValue] = useState(null);

  const handleSubmit = async () => {
    // Prepare data to send to the server
    const formData = {
      address,
      numerical_features: {
        description_sqft: sqft,
        description_baths_consolidated: baths,
        description_lot_sqft: lotSqft,
        description_beds: beds,
        list_price: listPrice,
      },
      categorical_features: {
        location_address_state: state,
        location_county_name: county,
        location_address_city: city,
      },
    };

    try {
      // Make API request to the server
      const response = await fetch('/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Parse the response
      const data = await response.json();

      // Update state with predicted value
      setPredictedValue(data.predictedValue);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Home Evaluation</h2>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Sqft:</label>
        <input type="number" value={sqft} onChange={(e) => setSqft(e.target.value)} />
      </div>
      <div>
        <label>Baths:</label>
        <input type="number" value={baths} onChange={(e) => setBaths(e.target.value)} />
      </div>
      <div>
        <label>Lot Sqft:</label>
        <input type="number" value={lotSqft} onChange={(e) => setLotSqft(e.target.value)} />
      </div>
      <div>
        <label>Beds:</label>
        <input type="number" value={beds} onChange={(e) => setBeds(e.target.value)} />
      </div>
      <div>
        <label>List Price:</label>
        <input type="number" value={listPrice} onChange={(e) => setListPrice(e.target.value)} />
      </div>
      <div>
        <label>State:</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </div>
      <div>
        <label>County:</label>
        <input type="text" value={county} onChange={(e) => setCounty(e.target.value)} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Evaluate</button>
      {predictedValue !== null && (
        <div>
          <h3>Predicted Value:</h3>
          <p>{predictedValue}</p>
        </div>
      )}
    </div>
  );
};

export default HomeEvaluationForm;
