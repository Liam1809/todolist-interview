import { TODOS_ACTION_TYPE } from '../constants/enums';
import { TodoItem, TodoActionWithPayload } from '../types/types';

export const getTodoItems = (): TodoActionWithPayload => {
  return { type: TODOS_ACTION_TYPE.get };
};

export const addTodoItem = (todo: TodoItem): TodoActionWithPayload => {
  return { type: TODOS_ACTION_TYPE.add, payload: todo };
};

export const removeTodoItem = (id: string): TodoActionWithPayload => {
  return { type: TODOS_ACTION_TYPE.delete, payload: id };
};

export const completeTodoItem = (todo: TodoItem): TodoActionWithPayload => {
  return { type: TODOS_ACTION_TYPE.complete, payload: todo };
};
