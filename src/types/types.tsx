import {
  InputHTMLAttributes,
  ButtonHTMLAttributes,
  Dispatch,
  ReactNode,
} from 'react';
import { BUTTON_TYPE_CLASSES } from '../constants/enums';

// ContextProvider for entire app type
export type ContextProvider = {
  state: RootState;
  dispatch: Dispatch<TodoActionWithPayload>;
};

// action type
export type TodoActionWithPayload =
  | { type: 'get' }
  | { type: 'add'; payload: TodoItem }
  | { type: 'delete'; payload: string }
  | { type: 'complete'; payload: TodoItem };

//  one note type
export type TodoItem = {
  id: string;
  note: string;
  active: boolean;
  completed: boolean;
};

// root type
export type RootState = {
  todos: TodoItem[];
};

// input props
export type InputProps = {
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

// button props
export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

//
export type StateProviderProps = {
  children?: ReactNode;
};
