import React, { createContext, useState, useContext, FC } from 'react';

interface Props {
  children?: FC;
}

const initialState = {
  menuCollapsed: false,
};

export const GlobalContext = createContext({});

const GlobalProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState(initialState);

  return <GlobalContext.Provider value={[state, setState]}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
