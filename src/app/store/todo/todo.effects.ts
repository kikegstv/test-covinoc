import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/todo.service';
import * as todoActions from './todo.actions';



@Injectable()
export class TodoEffects {
  constructor(
    private _actions$: Actions,
    private _todoService: TodoService,
  ) {}

  getTodos$ = createEffect(() =>
    this._actions$.pipe(
      ofType(todoActions.getTodos),
      switchMap((_) =>
        this._todoService.getTodos().pipe(
          map((todoData: Todo[]) => {
            return todoActions.successGetTodos({todoData});
          }),
          catchError((_) => {
            const error = {message: 'Ha ocurrido un error'};
            return of(todoActions.failureGetTodos({ error }));
          })
        )
      )
    )
  );

  createTodos$ = createEffect(() =>
    this._actions$.pipe(
      ofType(todoActions.createTodos),
      switchMap((payload) =>
        this._todoService.createTodo(payload.todo).pipe(
          map((_) => {
            return todoActions.successCreateTodos();
          }),
          catchError((_) => {
            const error = {message: 'Ha ocurrido un error'};
            return of(todoActions.failureCreateTodos({ error }));
          })
        )
      )
    )
  );

  updateTodos$ = createEffect(() =>
    this._actions$.pipe(
      ofType(todoActions.updateTodos),
      switchMap((payload) =>
        this._todoService.updateTodo(payload.todo, payload.todoId).pipe(
          map((_) => {
            return todoActions.successUpdateTodos();
          }),
          catchError((_) => {
            const error = {message: 'Ha ocurrido un error'};
            return of(todoActions.failureUpdateTodos({ error }));
          })
        )
      )
    )
  );

  deleteTodos$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        todoActions.deleteTodos
        ),
      switchMap((payload) =>
        this._todoService.deleteTodo(payload.todoId).pipe(
          map((_) => {
            return todoActions.successDeleteTodos();
          }),
          catchError((_) => {
            const error = {message: 'Ha ocurrido un error'};
            return of(todoActions.failureDeleteTodos({ error }));
          })
        )
      )
    )
  );

  successTransaction$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        todoActions.successDeleteTodos,
        todoActions.successCreateTodos,
        todoActions.successUpdateTodos,
        ),
      switchMap((payload) =>
        this._todoService.getTodos().pipe(
          map((_) => {
            return todoActions.getTodos();
          }),
          catchError((_) => {
            const error = {message: 'Ha ocurrido un error'};
            return of(todoActions.failureGetTodos({ error }));
          })
        )
      )
    )
  );
}
