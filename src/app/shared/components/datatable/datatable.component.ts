import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit  {

  public pages: Array<any> = [];
  @Input() header: Array<any>;
  @Input() isDisabled: boolean = false;
  @Input() paginateRange: number;
  @Input() numberPages: number;
  @Output() previousPage: EventEmitter<void>;
  @Output() nextPage: EventEmitter<void>;

  constructor() {
    this.previousPage = new EventEmitter<void>();
    this.nextPage = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.getPages();

  }

  onGoToNextPage() {
    this.nextPage.emit();
  }

  onGoToPreviousPage() {
    this.previousPage.emit();
  }

  getPages() {
    if(this.numberPages) {
      const pages = Math.ceil((this.numberPages / 5))

      for(let i = 1; i <= pages; i++) {
        this.pages.push(i);
      }
    }
  }
}
