import { Component, computed, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Lesson } from '../../model/model.cours';
import { LessonService } from '../../services/lesson.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-question-add-edit',
  imports: [MatInputModule,ReactiveFormsModule,MatSelectModule,MatOptionModule,MatDialogModule,MatIconModule,MatButtonModule],
  templateUrl: './question-add-edit.component.html',
  styleUrl: './question-add-edit.component.css'
})
export class QuestionAddEditComponent implements OnInit {
  questionForm!: FormGroup;
  isEditing: boolean=false;
  question!:any
  lessons=computed<Lesson[]>(()=>this.ls.getLessons())
  ngOnInit(): void {
    this.isEditing=this.data.edit;
    this.question=this.data?.question
    console.log(this.lessons())
    this.questionForm=this.fb.group(
      {
         texte:[{value:this.isEditing?this.question.texte:'',disabled:this.isEditing?true:false},[Validators.required]],
          points:[{value:this.isEditing?this.question.points:'',disabled:this.isEditing?true:false},[Validators.required]],
          lesson:['',[Validators.required]]
        
      }
    )
  }
enableField(field: string) {
  this.questionForm.get(field)?.enable()
  this.questionForm.reset()
}

saveQuestion() {

}

constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) private data:any,private ls:LessonService){

}
}
