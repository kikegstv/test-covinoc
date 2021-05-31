import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${environment.API}/todos`);
  }

  public createTodo(todo: Todo): Observable<any> {
    return this._http.post<any>(`${environment.API}/todos`, todo);
  }

  public updateTodo(todo: Todo, todoId: string): Observable<any> {
    return this._http.put<any>(`${environment.API}/todos/${todoId}`, todo);
  }

  public deleteTodo(todoId: string): Observable<any> {
    return this._http.delete<any>(`${environment.API}/todos/${todoId}`);
  }
}
