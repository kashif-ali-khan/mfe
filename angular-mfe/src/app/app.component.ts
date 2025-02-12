import { Component } from '@angular/core';
import { SignalComponent } from "./signal/signal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [SignalComponent]
})
export class AppComponent {
  title = 'angularMfe';

  onClick() {
    const event = new CustomEvent("fromangular", {
      detail: { message: "I am from angular" },
    });
    window.dispatchEvent(event);
  }
}
