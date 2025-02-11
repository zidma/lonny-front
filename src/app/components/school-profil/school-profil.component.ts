import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { LessonService } from '../../services/lesson.service';
import { ClassesService } from '../../services/classes.service';
import { TeacherService } from '../../services/teacher.service';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-school-profil',
  imports: [MatToolbarModule,MatButtonModule,MatSidenavModule,MatListModule,MatTabsModule,MatButtonModule,MatIconModule,MatInputModule,RouterOutlet,RouterModule],
  templateUrl: './school-profil.component.html',
  styleUrl: './school-profil.component.css'
})
export class SchoolProfilComponent {
logout() {
this.authService.logOut()
}
  eleves:any[]=[{id:1,nom:'ahmed diallo',username:'629498372',classe:'premiere'},
    {id:1,nom:'sow abdoul',username:'000498372',classe:'terminale'},
    {id:1,nom:'ahmed diallo',username:'625558372',classe:'seconde'},
    {id:1,nom:'bah mariama cire',username:'629144418372',classe:'5eme'},
  ]
  constructor(private ls:LessonService,private cs:ClassesService,private ts:TeacherService,public authService:AuthService){

  }

}
