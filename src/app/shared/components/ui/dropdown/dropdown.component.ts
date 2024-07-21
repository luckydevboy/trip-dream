import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

interface Option {
  name: string;
  value: string | number | boolean;
}

@Component({
  selector: 'sh-dropdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  // TODO: Render list box out of the parent container
  @Input() options!: Option[];
  @Input() placeholder!: string;
  @Output() onSelect = new EventEmitter<Option>();

  selectedOpt!: Option;
  isOpen = false;

  handleClick = (selectedOpt: Option) => {
    this.isOpen = false;
    this.selectedOpt = selectedOpt;
    this.onSelect.emit(selectedOpt);
  };
}
