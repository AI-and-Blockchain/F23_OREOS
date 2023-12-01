import React, {useState} from 'react';


const Predict = () => {
    const [prediction, setPrediction] = useState(null);
    const [formData, setFormData] = useState({
        description_beds: 6,
        description_baths_consolidated: 2,
        description_lot_sqft: 5000,
        description_sqft: 900,
        location_address_state: 'New York',
        location_county_name: 'Rensselaer',
        location_address_city: 'Troy',
        description_type: 'single_family'

    });

    const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
    const predictPrice = async () => {
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
            setPrediction(Math.round(data))
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
      <div>
        <form>
          <label>
            Beds:
            <input
              type='number'
              name='description_beds'
              value={formData.description_beds}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Baths Consolidated:
            <input
              type='number'
              name='description_baths_consolidated'
              value={formData.description_baths_consolidated}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Lot Sqft:
            <input
              type='number'
              name='description_lot_sqft'
              value={formData.description_lot_sqft}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Sqft:
            <input
              type='number'
              name='description_sqft'
              value={formData.description_sqft}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Location state:
            <input
              type='text'
              name='location_address_state'
              value={formData.location_address_state}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Location County:
            <input
              type='text'
              name='location_county_name'
              value={formData.location_county_name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Location City:
            <input
              type='text'
              name='location_address_city'
              value={formData.location_address_city}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description Type:
            <input
              type='text'
              name='description_type'
              value={formData.description_type}
              onChange={handleInputChange}
            />
          </label>

          {/* Add similar input fields for other features */}
          <button type='button' onClick={predictPrice}>
            Predict Price
          </button>
        </form>
        {prediction !== null && <p>Predicted Price: {prediction}</p>}
      </div>
    )
}

export default Predict;
