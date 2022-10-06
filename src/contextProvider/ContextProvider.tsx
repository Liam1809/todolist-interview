import React, { FC, createContext, useReducer } from 'react';
import { ContextProvider, StateProviderProps } from '../types/types';
import { initialState, reducer } from '../reducers/reducers';

export const StateContext = createContext({} as ContextProvider);

export const StateProvider: FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
