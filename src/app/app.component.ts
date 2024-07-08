import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, InputComponent } from '@shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
