import {
  InputHTMLAttributes,
  ButtonHTMLAttributes,
  Dispatch,
  ReactNode,
} from 'react';
import { BUTTON_TYPE_CLASSES } from '../constants/enums';

export type ContextProvider = {
  state: RootState;
  dispatch: Dispatch<TodoActionWithPayload>;
};

export type TodoActionWithPayload =
  | { type: 'get' }
  | { type: 'add'; payload: TodoItem }
  | { type: 'delete'; payload: string }
  | { type: 'complete'; payload: TodoItem };

export type TodoItem = {
  id: string;
  note: string;
  active: boolean;
  completed: boolean;
};

export type RootState = {
  todos: TodoItem[];
};

export type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type StateProviderProps = {
  children?: ReactNode;
};
