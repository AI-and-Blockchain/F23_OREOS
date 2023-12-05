import React, { useState } from 'react';
import Logo from './oreo_logo.png';
import {  useNavigate } from 'react-router-dom';
import { useData } from './DataContext';

const HomeEvaluationForm = () => {
  const { setProperty } = useData();
  const navigate = useNavigate();
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
  const [isDeployVisible, setDeployVisible] = useState(false);

  const handleSubmit = async () => {
    setDeployVisible(true);
    // Prepare data to send to the server
    const formData = {
      description_beds: beds,
        description_baths_consolidated: baths,
        description_lot_sqft: lotSqft,
        description_sqft: sqft,
        location_address_state: state,
        location_county_name: county,
        location_address_city: city,
        description_type: 'single_family'
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "charset": "utf-8"
        },
        body: JSON.stringify(formData),     
      })
      if (!response.ok) {
          throw new Error('Prediction request failed.');
      }

      const data = await response.json();
      setPredictedValue(Math.round(data))
  } catch (error) {
      console.error('Error:', error);
  }
  };

  const handleDeploy = async () => {  
    // Check if the user is logged into MetaMask
    const isMetaMaskLoggedIn = true; // Replace with your MetaMask check

    if (isMetaMaskLoggedIn) {
      setProperty({ address, listPrice, predictedValue, sqft, lotSqft, beds, baths, city, county, state });
      navigate(`/deploy`);
    } else {
      // Handle the case where the user is not logged into MetaMask
      console.log('User not logged into MetaMask');
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
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>List Price:</label>
        <input
          type="number"
          value={listPrice}
          onChange={(e) => setListPrice(e.target.value)}
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
        <label style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Beds:</label>
        <input
          type="number"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
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
      </div>
      <div style={{ paddingTop: '150px', flex: 1, textAlign: 'center' }}>
        {/* Image and 'OREOS Evaluation' text */}
        <img
          src={Logo}
          alt="OREOS Evaluation"
          style={{ width: '400px', height: 'auto' }}
        />
        <div style={{ color: 'white', marginTop: '10px' }}>
          {predictedValue !== null && (
          <div style={{ marginTop: '10px' }}>
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>OREOS Evaluation:</h3>
            <p style={{ color: getPredictedPriceColor(listPrice, predictedValue), fontSize: '30px' }}>
            {Number(predictedValue).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </p>
          </div>
            )}
          {isDeployVisible && (
                <button
                  onClick={handleDeploy}
                  style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}
                >
                  Deploy
                </button>
              )}
        </div>
      </div>
    </div>
  );
};


function getPredictedPriceColor(listPrice, predictedPrice) {
  const difference = predictedPrice - listPrice;

  if (Math.abs(difference) <= 5000) {
    return 'yellow';
  } else if (difference > 0) {
    return 'green';
  } else {
    return 'red';
  }
}

export default HomeEvaluationForm;

