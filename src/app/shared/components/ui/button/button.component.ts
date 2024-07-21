import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sh-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Input() class!: string;
  @Output() onClick!: EventEmitter<any>;

  defaultClasses = { btn: true, 'btn-primary': this.variant === 'primary' };

  get classes() {
    if (this.class) {
      return { [this.class]: true, ...this.defaultClasses };
    }

    return this.defaultClasses;
  }

  handleClick = () => {
    this.onClick.emit();
  };
}
