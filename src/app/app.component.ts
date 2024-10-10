import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { ZodiacComponent } from './formularios/zodiaco/zodiaco.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejemplo1Component, ZodiacComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSegundo';
}
