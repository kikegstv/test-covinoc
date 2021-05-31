import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/core/models/todo.model';

export const getTodos = createAction('[Todo Page] GetTodos');
export const successGetTodos = createAction('[Todo API] SuccessGetTodos', props<{ todoData: Todo[] }>());
export const failureGetTodos = createAction('[Todo API] FailureGetTodos', props<{ error: any }>());

export const createTodos = createAction('[Todo Page] createTodos', props<{ todo: Todo }>());
export const successCreateTodos = createAction('[Todo API] SuccessCreateTodos');
export const failureCreateTodos = createAction('[Todo API] FailureCreateTodos', props<{ error: any }>());

export const updateTodos = createAction('[Todo Page] updateTodos', props<{ todo: Todo, todoId: string }>());
export const successUpdateTodos = createAction('[Todo API] SuccessUpdateTodos');
export const failureUpdateTodos = createAction('[Todo API] FailureUpdateTodos', props<{ error: any }>());

export const deleteTodos = createAction('[Todo Page] deleteTodos', props<{ todoId: string }>());
export const successDeleteTodos = createAction('[Todo API] SuccessDeleteTodos');
export const failureDeleteTodos = createAction('[Todo API] FailureDeleteTodos', props<{ error: any }>());
