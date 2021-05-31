import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.state';

export const getTodoFeatureState = createFeatureSelector('todo');

export const selectLoadingPage = createSelector(
  getTodoFeatureState,
  (state: TodoState) => state?.isLoadingPage
);

export const selectTodos = createSelector(
  getTodoFeatureState,
  (state: TodoState) => state?.todoData
);
