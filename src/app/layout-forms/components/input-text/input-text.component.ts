import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ]
})
export class InputTextComponent implements OnInit {

  @Input() maxlength = 250;
  @Input() id = '';
  @Input() type = 'text';
  @Input() required = true;
  @Input() disabled = false;
  @Input() hasTwoRegex = false;
  @Input() placeholder = '';
  @Input() inputmode = '';

  @Output() event: EventEmitter<string>;
  @ViewChild('input') input: ElementRef;

  public value: string;
  public isDisabled: boolean;
  private _onChange = (_: any) => {};
  private _onTouch = () => {};

  constructor() {
    this.value = '';
    this.event = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onChange() {
    this._onTouch();
    this._onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value ? value + '' : '';
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public onInput(event) {
    const currentValue = event.target['value'];
    this._onTouch();
    this.value = currentValue;
    this._onChange(this.value);
    this.event.emit(this.value);
  }
}
