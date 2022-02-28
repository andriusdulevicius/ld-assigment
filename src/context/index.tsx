import { createContext, useState, useContext, FC, ReactElement } from 'react';

interface Props {
  children: FC | ReactElement;
}

interface State {
  [key: string]: string | number | boolean | State;
}

type GlobalContextType = [State, (arg1: State) => void];

const initialState = {
  menuCollapsed: false,
};

export const GlobalContext = createContext<GlobalContextType>([initialState, () => {}]);

const GlobalProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>(initialState);

  const contextValue: GlobalContextType = [state, setState];

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
