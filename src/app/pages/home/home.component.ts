import { Component, inject, OnInit } from '@angular/core';

import {
  AccommodationCardComponent,
  SearchComponent,
} from '@shared/components';
import { AccommodationService } from '@core/services/accommodation.service';
import { Accommodation } from '@core/interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, SearchComponent, AccommodationCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  accommodations!: Accommodation[];

  accommodationService = inject(AccommodationService);

  ngOnInit() {
    this.accommodationService.getAccommodations().subscribe((res) => {
      this.accommodations = res.data;
    });
  }
}
