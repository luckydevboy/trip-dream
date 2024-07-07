import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'sh-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  inputValue = '';

  // Function to call when the value changes
  onChange = (value: string) => {};

  // Function to call when the input is touched (blurred)
  onTouched = () => {};

  // Method to be called when the input value changes
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    this.onChange(this.inputValue);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.inputValue = value;
  }
}
