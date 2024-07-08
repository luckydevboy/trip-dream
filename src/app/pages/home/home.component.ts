import { Component } from '@angular/core';

import { SearchComponent } from '@shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
