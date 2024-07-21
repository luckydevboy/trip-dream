import { Component, inject, OnInit } from '@angular/core';

import {
  AccommodationCardComponent,
  SearchComponent,
} from '@shared/components';
import { AccommodationService } from '@core/services/accommodation.service';
import { Accommodation } from '@core/interfaces';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent,
    SearchComponent,
    AccommodationCardComponent,
    InfiniteScrollDirective,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  accommodations!: Accommodation[];
  page = 1;

  accommodationService = inject(AccommodationService);

  ngOnInit() {
    this.accommodationService
      .getAccommodations({ page: this.page })
      .subscribe((res) => {
        this.accommodations = res.data;
      });
  }

  onScroll() {
    this.page += 1;
    this.accommodationService
      .getAccommodations({ page: this.page })
      .subscribe((res) => {
        this.accommodations = [...this.accommodations, ...res.data];
      });
  }
}
