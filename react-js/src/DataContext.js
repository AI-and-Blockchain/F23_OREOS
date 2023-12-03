import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [propertyData, setPropertyData] = useState({});

  const setProperty = (data) => {
    setPropertyData(data);
  };

  return (
    <DataContext.Provider value={{ propertyData, setProperty }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
