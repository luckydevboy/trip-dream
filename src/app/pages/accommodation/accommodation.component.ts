import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

import { ButtonComponent } from '@shared/components';
import { Accommodation } from '@core/interfaces';
import { AccommodationService } from '@core/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accommodation',
  standalone: true,
  imports: [ButtonComponent, CarouselModule],
  templateUrl: './accommodation.component.html',
  styleUrl: './accommodation.component.css',
})
export class AccommodationComponent implements OnInit {
  data!: Accommodation;

  accommodationService = inject(AccommodationService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.accommodationService
      .getAccommodation(this.route.snapshot.params['id'])
      .subscribe((res) => {
        this.data = res.data;
      });
  }
}
