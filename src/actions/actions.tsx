import { TODOS_ACTION_TYPE } from '../constants/enums';
import { TodoItem, TodoActionWithPayload } from '../types/types';

// actions

// get all notes
export const getTodoItems = (): TodoActionWithPayload => {
  return { type: TODOS_ACTION_TYPE.get };
};

// add new notet
export const addTodoItem = (todo: TodoItem): TodoActionWithPayload => {
  return { type: TODOS_ACTION_TYPE.add, payload: todo };
};

// remove a note
export const deleteTodoItem = (id: string): TodoActionWithPayload => {
  return { type: TODOS_ACTION_TYPE.delete, payload: id };
};

// strike through when complete a note
export const completeTodoItem = (todo: TodoItem): TodoActionWithPayload => {
  return { type: TODOS_ACTION_TYPE.complete, payload: todo };
};
