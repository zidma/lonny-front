import { Component, input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { LessonService } from '../../services/lesson.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cours-dashboard',
  imports: [MatInputModule,ReactiveFormsModule  ],
  templateUrl: './cours-dashboard.component.html',
  styleUrl: './cours-dashboard.component.css'
})
export class CoursDashboardComponent implements OnInit {
  seachGroup!:FormGroup
  titlePreview$!:Observable<string>
  chapitrePreview$!:Observable<string>
  disciplinePreview$!:Observable<string>
  constructor(private ls:LessonService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.seachGroup=this.fb.group(
      {
        title:[],
        chapitre:[],
        discipline:[]
      }
    )
    
  }

  titleField=new FormControl('')
  trackChange(event:any){
  this.ls.recherche(event.target.value)
  }

}
