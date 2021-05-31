import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.scss']
})
export class TodoSearchComponent implements OnInit {

  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._buildForm();
  }

  private _buildForm() {
    this.form = this._formBuilder.group(
      {
        createdAt: [''],
        state: [false, Validators.required],
        title: ['', Validators.required],
      }
    )
  }

}
