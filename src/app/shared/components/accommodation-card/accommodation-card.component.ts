import { Component } from '@angular/core';
import { ButtonComponent, StarsComponent } from '@shared/components';

@Component({
  selector: 'sh-accommodation-card',
  standalone: true,
  imports: [ButtonComponent, StarsComponent],
  templateUrl: './accommodation-card.component.html',
  styleUrl: './accommodation-card.component.css',
})
export class AccommodationCardComponent {}
