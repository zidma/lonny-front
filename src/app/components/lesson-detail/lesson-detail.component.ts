import { Component, computed, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../model/model.cours';
import { LessonService } from '../../services/lesson.service';
import { Question } from '../../model/model.question';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-lesson-detail',
  imports: [MatCardModule,MatTableModule,MatIconModule],
  templateUrl: './lesson-detail.component.html',
  styleUrl: './lesson-detail.component.css'
})
export class LessonDetailComponent implements OnInit{
displayedColumns: string[]=['id','texte','points','action'];
dataSource!:any;
lesson=computed<any>(()=>this.ls.getLessonById(this.id))
questions!:any
openQuestionDialog(_t51: any) {
}
delete(arg0: any) {
}
  id!:number;
formOpened: any;
ngOnInit(): void {
  this.id=+this.ar.snapshot.params['id'];
  this.questions=computed<any>(()=>this.qs.getlessonQuestions(this.id));
this.dataSource=new MatTableDataSource(this.questions())
}
constructor(private ar:ActivatedRoute,private ls:LessonService,private qs:QuestionsService){

}
}
