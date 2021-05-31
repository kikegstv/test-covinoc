import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from './pipes/paginate.pipe';
import { DatatableComponent } from './components/datatable/datatable.component';



@NgModule({
  declarations: [
    DatatableComponent,
    PaginatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatatableComponent,
    PaginatePipe
  ]
})
export class SharedModule { }
