import { RootState, TodoActionWithPayload, TodoItem } from '../types/types';
import { TODOS_ACTION_TYPE } from '../constants/enums';

// initial state
export const initialState: RootState = {
  todos: [],
};

// Root reducer
export const reducer = (
  state: RootState,
  action: TodoActionWithPayload
): RootState => {
  switch (action.type) {
    case TODOS_ACTION_TYPE.get:
      const obj = JSON.parse(localStorage.getItem('todos') || '{}');
      const todos: TodoItem[] = obj.todos;

      return { ...state, todos: todos };

    case TODOS_ACTION_TYPE.add:
      const updatedTodos = [...state.todos, action.payload];
      localStorage.setItem('todos', JSON.stringify({ todos: updatedTodos }));
      return {
        ...state,
        todos: updatedTodos,
      };

    case TODOS_ACTION_TYPE.delete:
      const filterTodos = state.todos.filter(
        item => item.id !== action.payload
      );
      localStorage.setItem('todos', JSON.stringify({ todos: filterTodos }));

      return {
        ...state,
        todos: filterTodos,
      };
    case TODOS_ACTION_TYPE.complete:
      const updateTodos = state.todos.map(item =>
        item.id === action.payload.id ? action.payload : item
      );

      localStorage.setItem('todos', JSON.stringify({ todos: updateTodos }));

      return {
        ...state,
        todos: updateTodos,
      };

    default:
      return state;
  }
};
