import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../core/models/todo.model';


import * as todoActions from './../store/todo/todo.actions';
import * as todoSelectors from './../store/todo/todo.selectors';

@Injectable({ providedIn: 'root' })

export class TodoFacade {

  public loadingPage$: Observable<boolean>;
  public todoData$: Observable<Todo[]>;

  constructor(private _store: Store) {
    this.loadingPage$ = this._store.select(todoSelectors.selectLoadingPage);
    this.todoData$ = this._store.select(
      todoSelectors.selectTodos
    );
  }

  public getTodoData() {
    this._store.dispatch(todoActions.getTodos());
  }
  public createTodoData(value: Todo) {
    this._store.dispatch(todoActions.createTodos({todo: value}));
  }
  public updateTodoData(todo: Todo, todoId: string) {
    this._store.dispatch(todoActions.updateTodos({todo, todoId}));
  }
  public deleteTodoData(todoId: string) {
    this._store.dispatch(todoActions.deleteTodos({todoId}));
  }


}
