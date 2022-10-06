import React, { FC, createContext, useReducer, useEffect } from 'react';
import { ContextProvider, StateProviderProps } from '../types/types';
import { initialState, reducer } from '../reducers/reducers';

export const StateContext = createContext({} as ContextProvider);

export const StateProvider: FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('todos') || '{}');

    if (!obj.hasOwnProperty('todos')) {
      localStorage.setItem('todos', JSON.stringify({ todos: state.todos }));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
