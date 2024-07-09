import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '@env/environment.development';
import { Accommodation, Pagination } from '@core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  https = inject(HttpClient);

  constructor() {}

  getAccommodations(params?: { page?: number; pageSize?: number }) {
    let httpParams = new HttpParams();

    if (params?.page) {
      httpParams.set('page', String(params.page));
    }

    if (params?.pageSize) {
      httpParams.set('pageSize', String(params.pageSize));
    }

    return this.https.get<{ pagination: Pagination; data: Accommodation[] }>(
      `${environment.apiUrl}/accommodations`,
      {
        params: httpParams,
      },
    );
  }

  getAccommodation(id: number) {
    return this.https.get(`${environment.apiUrl}/accommodations/${id}`, {});
  }
}
