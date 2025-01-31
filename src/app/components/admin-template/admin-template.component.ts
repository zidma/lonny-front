import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-admin-template',
  imports: [MatToolbarModule,MatButtonModule],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {
    
}
