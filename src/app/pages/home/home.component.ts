import { Component } from '@angular/core';

import {
  AccommodationCardComponent,
  SearchComponent,
} from '@shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, SearchComponent, AccommodationCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  accommodations = Array.from({ length: 10 });
}
