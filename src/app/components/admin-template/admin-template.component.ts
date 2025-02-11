import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';
import{MatButtonModule} from '@angular/material/button'
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-admin-template',
  imports: [MatToolbarModule,MatButtonModule,RouterModule,RouterLink],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {
  constructor(public as:AuthService){
  }
  logout(){
    this.as.logOut()
  }
}
