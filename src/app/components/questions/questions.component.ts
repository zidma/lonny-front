import { Component, computed, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Question } from '../../model/model.question';
import { QuestionsService } from '../../services/questions.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { QuestionAddEditComponent } from '../question-add-edit/question-add-edit.component';

@Component({
  selector: 'app-questions',
  imports: [MatCardModule,MatTableModule,MatSelectModule,MatOptionModule,MatIconModule,MatButtonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit {
openQuestionDialog(element: any) {
   if(element){
    this.dialog.open(QuestionAddEditComponent,{
      width:'500px',
      disableClose:true,
      enterAnimationDuration:'900ms',
      exitAnimationDuration:'900ms',
      data:{
        question:element,
        edit:true
      }
    })
   }else{
    this.dialog.open(QuestionAddEditComponent,{
      width:'500px',
      disableClose:true,
      enterAnimationDuration:'900ms',
      exitAnimationDuration:'900ms',
      data:{
        question:null,
        edit:false
      }
    })
   }
}
formOpened: any;
delete(arg0: any) {

}
  datasource!:any;
  questions=computed<Question[]>(()=>this.qs.getQuestions())
  displayedColumns:string[]=['id','texte','points','actions']
  ngOnInit(): void {
    this.datasource=new MatTableDataSource(this.questions())
  }
  constructor (private qs:QuestionsService,private dialog:MatDialog){
  }

}
