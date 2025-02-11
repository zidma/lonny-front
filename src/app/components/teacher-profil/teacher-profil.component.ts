import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatMenuModule,MatMenuItem } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-teacher-profil',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,ReactiveFormsModule,MatInputModule,MatMenuModule,MatCardModule,MatSidenavModule,MatListModule,RouterModule],
  templateUrl: './teacher-profil.component.html',
  styleUrl: './teacher-profil.component.css'
})
export class TeacherProfilComponent {
  schools:string[]=['Elh.Amadou Korka Balde','Emmaus','Glc']
  disciplines:string[]=['Mathematiques','Physique','Chimie']
  classes:string[]=['Terminale','Premiere','Seconde']
  selectedSchool=this.schools[0]
}
