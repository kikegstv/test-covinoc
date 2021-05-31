import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoFacade } from './../../../facades/todo.facade'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges {

  public todos$: Todo[];
  public todosubs: Subscription;
  public range: number = 0;
  public search: string;

  constructor(
    private _todoFacade: TodoFacade
  ) { }

  ngOnInit() {
    this._todoFacade.getTodoData();
    this.todosubs = this._todoFacade.todoData$
    .pipe(
      filter(todo => todo != null || todo != undefined)
    )
    .subscribe((response) => {
      this.todos$ = response;
    });
  }

  ngOnChanges() {

  }

  goToPreviousPage() {
    if(this.range > 0)
      this.range -= 5;
  }

  goToNextPage() {
    this.range += 5;
  }

  onSearchTodo(search: string) {
    this.range = 0;
    this.search = search;
  }

  updateTodo(todo: Todo, todoValue: boolean) {
    const todoValueUpdated = {
      id: todo.id,
      createdAt: todo.createdAt,
      state: todoValue,
      title: todo.title,
    }
    this._todoFacade.updateTodoData(todoValueUpdated, todo.id);
  }

  deleteTodo(todoId: string) {
    this._todoFacade.deleteTodoData(todoId);
  }

  getTodoList() {

  }

}
