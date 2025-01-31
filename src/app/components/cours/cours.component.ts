import { Component, computed, OnInit, signal } from '@angular/core';
import { Lesson } from '../../model/model.cours';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-cours',
  imports: [],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit {
  lessons=computed<Lesson[]>(()=>this.ls.getLessons())
  constructor(private ls:LessonService){
    
  }
  ngOnInit(): void {
    
  }
  


}
