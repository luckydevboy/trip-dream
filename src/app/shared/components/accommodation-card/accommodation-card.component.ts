import { Component, Input } from '@angular/core';
import { StarsComponent } from '@shared/components';
import { Accommodation } from '@core/interfaces';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components/ui';

@Component({
  selector: 'sh-accommodation-card',
  standalone: true,
  imports: [ButtonComponent, StarsComponent, NgOptimizedImage, RouterLink],
  templateUrl: './accommodation-card.component.html',
  styleUrl: './accommodation-card.component.css',
})
export class AccommodationCardComponent {
  @Input() data!: Accommodation;
}
