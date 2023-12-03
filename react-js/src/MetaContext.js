import { createContext, useContext, useEffect, useState } from 'react';

const MetamaskContext = createContext();

export const MetamaskProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState(null);

  useEffect(() => {
    // Check if MetaMask is installed and connected
    if (window.ethereum) {
      // Subscribe to MetaMask account changes
      window.ethereum.on('accountsChanged', (accounts) => {
        const newAccount = accounts.length > 0 ? accounts[0] : null;
        setConnectedAccount(newAccount);
      });

      // Set initial connected account
      const initialAccounts = window.ethereum.request({ method: 'eth_accounts' });
      const initialAccount = initialAccounts.length > 0 ? initialAccounts[0] : null;
      setConnectedAccount(initialAccount);
    }
  }, []);

  const connectAccount = (account) => {
    setConnectedAccount(account);
  };

  return (
    <MetamaskContext.Provider value={{ connectedAccount, connectAccount }}>
      {children}
    </MetamaskContext.Provider>
  );
};

export const useMetamask = () => {
  return useContext(MetamaskContext);
};
