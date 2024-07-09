import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components';

@Component({
  selector: 'app-accommodation',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './accommodation.component.html',
  styleUrl: './accommodation.component.css',
})
export class AccommodationComponent {}
