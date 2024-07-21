import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ButtonComponent,
  DropdownComponent,
  InputComponent,
} from '@shared/components/ui';
import { LayoutComponent } from '@shared/components';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    ButtonComponent,
    DropdownComponent,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly console = console;
}
