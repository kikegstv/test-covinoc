import { createReducer, on, Action } from '@ngrx/store';
import * as todoActions from './todo.actions';
import { TodoState } from './todo.state';

export const initialAuthState: TodoState = {
  todoData: null,
  isLoadingPage: false,
};

const _todoReducer = createReducer(
  initialAuthState,
  on(todoActions.getTodos, (state) => {
    return {
      ...state,
      isLoadingPage: true,
    };
  }),
  on(todoActions.successGetTodos, (state, { todoData }) => {
    return {
      ...state,
      todoData,
      isLoadingPage: false,
    };
  }),
  on(todoActions.failureGetTodos, (state, { error }) => {
    return {
      ...state,
      error,
      isLoadingPage: false,
    };
  }),
  on(todoActions.createTodos, (state) => {
    return {
      ...state,
      isLoadingPage: true,
    };
  }),
  on(todoActions.successCreateTodos, (state) => {
    return {
      ...state,
      isLoadingPage: false,
    };
  }),
  on(todoActions.failureCreateTodos, (state, { error }) => {
    return {
      ...state,
      error,
      isLoadingPage: false,
    };
  }),
  on(todoActions.updateTodos, (state) => {
    return {
      ...state,
      isLoadingPage: true,
    };
  }),
  on(todoActions.successUpdateTodos, (state) => {
    return {
      ...state,
      isLoadingPage: false,
    };
  }),
  on(todoActions.failureUpdateTodos, (state, { error }) => {
    return {
      ...state,
      error,
      isLoadingPage: false,
    };
  }),
  on(todoActions.deleteTodos, (state) => {
    return {
      ...state,
      isLoadingPage: true,
    };
  }),
  on(todoActions.successDeleteTodos, (state) => {
    return {
      ...state,
      isLoadingPage: false,
    };
  }),
  on(todoActions.failureDeleteTodos, (state, { error }) => {
    return {
      ...state,
      error,
      isLoadingPage: false,
    };
  }),

);

export function TodoReducers(state: TodoState | undefined, action: Action) {
  return _todoReducer(state, action);
}
