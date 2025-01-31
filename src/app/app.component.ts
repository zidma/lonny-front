import { Component } from '@angular/core';
import { AdminTemplateComponent } from "./components/admin-template/admin-template.component";

@Component({
  selector: 'app-root',
  imports: [ AdminTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lonny-front';
}
