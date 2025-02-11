import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-teacher-add-edit',
  imports: [MatDialogModule,MatIconModule,ReactiveFormsModule,MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule],
  templateUrl: './teacher-add-edit.component.html',
  styleUrl: './teacher-add-edit.component.css'
})
export class TeacherAddEditComponent implements OnInit {
teacherForm!: FormGroup;
sexe:string[]=['M','F'] 
isEditing:boolean=false;
teacher!:any
saveTeacher() {
}
ngOnInit(): void {
  this.teacher=this.data.teacher
  this.isEditing=this.data.edit
  this.teacherForm=this.fb.group(
    {
      nom:[{value:this.isEditing?this.teacher.nom:'',disabled:this.isEditing?true:false},[Validators.required]],
      prenom:[{value:this.isEditing?this.teacher.prenom:'',disabled:this.isEditing?true:false},[Validators.required]],
      telephone:[{value:this.isEditing?this.teacher.telephone:'',disabled:this.isEditing?true:false},[Validators.required]],
      email:[{value:this.isEditing?this.teacher.sexe:'',disabled:this.isEditing?true:false}],
      sexe:[{value:this.isEditing?this.teacher.sexe:'',disabled:this.isEditing?true:false},[Validators.required]]
    }
  )
}
constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA)private data:any){

}
enableField(field: string) {
  this.teacherForm.get(field)?.enable()
  this.teacherForm.get(field)?.reset()
}


}
