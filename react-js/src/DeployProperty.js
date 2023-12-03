import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMetamask } from './MetaContext';
import RealEstateArtifact from './RealEstateToken.json'; 
import Web3 from 'web3';
import MetamaskLogo2 from './metamask2.png'; 
import { useData } from './DataContext';
import './App.css';

const DeployProperty = () => {
  const { connectedAccount } = useMetamask();
  const { propertyData } = useData();
  const {  address, listPrice, predictedValue, sqft, lotSqft, beds, baths, city, county, state  } = propertyData;
  const [totalShares, setTotalShares] = useState('');
  const [pricePerShare, setPricePerShare] = useState('');
  const [isPropertyPublished, setPropertyPublished] = useState(false);

  const addProperty = async (deployedContract, listPrice, sharePrice,estimatedPrice, initialShares, isPublic) => {
    try {
      // Call the 'appProperty' function on the deployed contract
      const accounts = await window.ethereum.enable();
  
      // Set up parameters for the 'appProperty' function
      const functionParameters = {
        _listPrice: listPrice,
        _estimatedPrice: estimatedPrice,
        _initialShares: initialShares,
        _isPublic: isPublic,
      };
      console.log('params:', functionParameters);
  
      // Make the function call
      const result = await deployedContract.methods.addProperty(
        functionParameters._listPrice,
        functionParameters._estimatedPrice,
        functionParameters._initialShares,
        functionParameters._isPublic
      ).send({ from: accounts[0] });
  
      console.log("connected account:", result.from);
      const existingData = await fetchInvestListings(); 
      const newData = {
        "contractAddress": deployedContract.options.address,
        "owner": result.from,
        "sharePrice": sharePrice,
        "imageURL": "https://example.com/image2.jpg",
        "details": {
          "address": address,
          "city": city,
          "county": county,
          "state": state,
          "listPrice": listPrice,
          "predictedValue": estimatedPrice,
          "sqft": sqft,
          "lotSqft": lotSqft,
          "beds": beds,
          "baths": baths
        }
      };
      const updatedData = [...existingData, newData];
      saveToLocalStorage('investListings', updatedData);

      // Handle the result of the function call
      console.log('appProperty function called successfully:', result);

    } catch (error) {
      console.error('Error calling appProperty function:', error);
    }
  };

  const fetchInvestListings = async () => {
    try {
      // Fetch data from the JSON file
      const response = await fetch('/investListings.json');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
        }
      // Parse JSON data
      const jsonData = await response.json();
  
      // Store data in localStorage
      saveToLocalStorage('investListings', jsonData);
      
  
      // Return the data if needed
      return jsonData;
    } catch (error) {
      console.error('Error fetching and storing data:', error);
      return null;
    }
  };

  const saveToLocalStorage = (key, data) => {
    try {
      // Convert data to JSON and store it in localStorage
      localStorage.setItem(key, JSON.stringify(data));
      console.log("Saved data:",data);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };



  const handlePublishProperty = async () => {
    try {
      // Step 1: Connect to Web3 provider (MetaMask)
      if (window.ethereum) {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
  
        // Step 2: Access the bytecode from the contract artifact
        const bytecode = RealEstateArtifact.data.bytecode.object.replace(/^0x/, ''); // Remove existing '0x' prefix

        // Step 3: Deploy the smart contract
        const accounts = await web3.eth.getAccounts();
        const gas = 3000000//await web3.eth.estimateGas({ data: formattedBytecode });
  
        // Set up contract parameters
        const contractName = address;
        const symbol = 'RET';
        const initialSupply = 100;
        const sharePrice = pricePerShare;
        const totalContractShares = totalShares;
  
        const contract = new web3.eth.Contract(RealEstateArtifact.abi);
        const deployedContract = await contract.deploy({
          data: '0x' + bytecode,
          arguments: [contractName, symbol, initialSupply, sharePrice, totalContractShares],
        }).send({
          from: accounts[0],
          gas,
        });

        // Call the 'addProperty' function
        await addProperty(deployedContract, listPrice, sharePrice,predictedValue, 100, true);
  
        // Handle contract deployment events
        deployedContract.once('receipt', (receipt) => {
          console.log('Contract deployed successfully:', receipt);
          // Perform additional actions or update state
          setPropertyPublished(true);
        });
        console.log('Contract deployed successfully:');

      } else {
        console.error('MetaMask not detected. Please install MetaMask and log in.');
      }
    } catch (error) {
      console.error('Error deploying smart contract:', error);
    }
  };
  
  

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '80px' }}>
      <div style={{ width: '60%' }}>
        <h2>Deploy Property</h2>
        <div>
          <label>Street Address:</label>
          <p style={{ fontSize: '24px' }}><strong>{address}</strong></p>
        </div>
        <div>
          <label>Estimated Price:</label>
          <p style={{ fontSize: '24px' }}><strong>{predictedValue}</strong></p>
        </div>
        <div>
          <label>List Price:</label>
          <p style={{ fontSize: '24px' }}><strong>{listPrice}</strong></p>
        </div>
        <div style={{marginBottom: '20px'}}>
          <label>Total Shares:  </label>
          <input type="number" 
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
          value={totalShares} onChange={(e) => setTotalShares(e.target.value)} 
           />
        </div>
        <div style={{marginBottom: '20px'}}>
          <label>Price Per Share:  </label>
          <input type="number" 
          style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', fontSize: '16px' }}
          value={pricePerShare} onChange={(e) => setPricePerShare(e.target.value)} />
        </div>
        <button className="view-button" onClick={() => {handlePublishProperty() ;  setPropertyPublished(true);}}>Publish Property</button>
  
        {isPropertyPublished && (
          <div style={{ marginTop: '20px' }}>
            <h3>Property Published Successfully!</h3>
            {/* You can display additional information or provide a link to view the published property */}
          </div>
        )}
      </div>
  
      {isPropertyPublished && (
      <div style={{ width: '40%', textAlign: 'center' }}>
        <h2>Confirming with MetaMask (2 steps)</h2>
        <img src={MetamaskLogo2} alt="MetaMask Confirmation" style={{ width: '80%', marginTop: '20px' }} />
      </div>
    )}
    </div>
  );
  
};

export default DeployProperty;
