import React, { createContext, useState, useContext } from 'react';

const initialState = {
  menuCollapsed: false,
};

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return <GlobalContext.Provider value={[state, setState]}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
