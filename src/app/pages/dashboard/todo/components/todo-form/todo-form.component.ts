import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoFacade } from 'src/app/facades/todo.facade';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _todoFacade: TodoFacade) { }

  ngOnInit(): void {
    this._buildForm();
  }

  onSubmit() {
    this._todoFacade.createTodoData(this.form.value)
  }

  private _buildForm() {
    this.form = this._formBuilder.group(
      {
        createdAt: ['1621953665'],
        state: [false, Validators.required],
        title: ['', Validators.required],
      }
    )
  }

}
