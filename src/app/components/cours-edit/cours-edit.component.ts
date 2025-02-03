import { Component, computed, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { School } from '../../model/model.school';
import { SchoolsService } from '../../services/schools.service';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cours-edit',
  imports: [MatDialogModule,MatInputModule,ReactiveFormsModule,MatButtonModule,MatSelectModule,MatOptionModule,MatIconModule],
  templateUrl: './cours-edit.component.html',
  styleUrl: './cours-edit.component.css'
})
export class CoursEditComponent implements OnInit {
  lessonForm!:FormGroup
  fieldsValues!:any
  ecoles=computed<School[]>(()=>this.es.getSchools())
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) private  data:any,private es:SchoolsService,private ref:MatDialogRef<CoursEditComponent>){

  }
ngOnInit(): void {
  this.fieldsValues=this.data.lesson
   this.lessonForm=this.fb.group(
        {
          title:[{value:this.fieldsValues.title,disabled:true},[Validators.required]],
          chapitre:[{value:this.fieldsValues.chapter,disabled:true},[Validators.required]],
          discipline:[{value:this.fieldsValues.discipline,disabled:true},[Validators.required]],
          ecole:[{value:this.fieldsValues.ecole,disabled:true},[Validators.required]],
          contenu:[{value:this.fieldsValues.content,disabled:true},[Validators.required,Validators.maxLength(255)]],
        }
      )
}
saveEdit(){
if(this.lessonForm.valid){
  console.log(this.lessonForm.get('ecole')?.value)
  let updated={
    id:this.fieldsValues.id,
    title:this.lessonForm.get('title')?.value,
    chapter:this.lessonForm.get('chapitre')?.value,
    discipline:this.lessonForm.get('discipline')?.value,
    ecole:this.lessonForm.get('ecole')?.value.id,
    content:this.lessonForm.get('contenu')?.value
  }
  this.ref.close(updated)
}
}
enableField(field:string){
  console.log(field)
  this.lessonForm.get(field)?.enable()
  this.lessonForm.get(field)?.reset()
  console.log(this.lessonForm.get(field)?.value)
}

}
