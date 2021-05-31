import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutFormsModule } from 'src/app/layout-forms/layout-forms.module';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoSearchComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LayoutFormsModule
  ]
})
export class TodoModule { }
