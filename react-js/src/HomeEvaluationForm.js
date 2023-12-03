import React, { useState } from 'react';
import Logo from './oreo_logo.png';

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
    <div style={{ paddingTop: '80px',paddingLeft: '30px', display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2>Home Evaluation</h2>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
          />
        </div>
        
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Sqft:</label>
        <input
          type="number"
          value={sqft}
          onChange={(e) => setSqft(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Baths:</label>
        <input
          type="number"
          value={baths}
          onChange={(e) => setBaths(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Lot Sqft:</label>
        <input
          type="number"
          value={lotSqft}
          onChange={(e) => setLotSqft(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Beds:</label>
        <input
          type="number"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>List Price:</label>
        <input
          type="number"
          value={listPrice}
          onChange={(e) => setListPrice(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>County:</label>
        <input
          type="text"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold' }}
      >
        Evaluate
        </button>
        {predictedValue !== null && (
          <div style={{ marginTop: '10px' }}>
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>Predicted Value:</h3>
            <p style={{ color: 'white', fontSize: '18px' }}>{predictedValue}</p>
          </div>
        )}
      </div>
      <div style={{ paddingTop: '80px', flex: 1, textAlign: 'center' }}>
        {/* Image and 'OREOS Evaluation' text */}
        <img
          src={Logo}
          alt="OREOS Evaluation"
          style={{ width: '400px', height: 'auto' }}
        />
        <div style={{ color: 'white', marginTop: '10px' }}>
          <h2>OREOS Evaluation:  </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeEvaluationForm;

