// Create a context to store the connected account address
import { createContext, useContext, useState } from 'react';

const MetamaskContext = createContext();

export const MetamaskProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState(null);

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
