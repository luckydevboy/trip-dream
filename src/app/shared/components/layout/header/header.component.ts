import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/ui';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
