import { TodoEffects } from './todo/todo.effects';
import { TodoReducers } from './todo/todo.reducers';
import { TodoState } from './todo/todo.state';

export interface RootState {
  todo: TodoState;
}
export const appReducers = {
  todo: TodoReducers,
};
export const appEffects = [
  TodoEffects,
];
