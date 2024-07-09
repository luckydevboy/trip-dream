import { Routes } from '@angular/router';

import { AccommodationComponent, HomeComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accommodations/:id',
    component: AccommodationComponent,
  },
];
