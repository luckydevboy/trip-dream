import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import {
  ButtonComponent,
  DropdownComponent,
  InputComponent,
} from '@shared/components';

@Component({
  selector: 'sh-search',
  standalone: true,
  imports: [InputComponent, ButtonComponent, NgClass, DropdownComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Input() class!: string;

  defaultClasses =
    'bg-white inline-flex flex-col lg:flex-row gap-y-4 w-full max-w-[500px] lg:max-w-none lg:w-auto rounded-lg p-4 gap-x-4';

  get classes() {
    if (this.class) {
      return `${this.class} ${this.defaultClasses}`;
    }

    return this.defaultClasses;
  }
}
