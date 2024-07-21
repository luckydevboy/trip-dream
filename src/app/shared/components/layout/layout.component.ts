import { Component } from '@angular/core';
import { HeaderComponent } from '@shared/components/layout/header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
