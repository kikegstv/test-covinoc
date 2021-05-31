import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputSearchComponent } from './components/input-search/input-search.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextComponent,
    InputSearchComponent
  ]
})
export class LayoutFormsModule { }
