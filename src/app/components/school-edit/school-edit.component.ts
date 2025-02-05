import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SchoolsService } from '../../services/schools.service';

@Component({
  selector: 'app-school-edit',
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,MatIconModule,MatDialogModule],
  templateUrl: './school-edit.component.html',
  styleUrl: './school-edit.component.css'
})
export class SchoolEditComponent implements OnInit{
  toUpdate!:any
  schoolForm!:FormGroup
constructor(private fb:FormBuilder,private ss:SchoolsService,@Inject(MAT_DIALOG_DATA) private  data:any,private ref:MatDialogRef<SchoolEditComponent>){

}
ngOnInit(): void {
  this.toUpdate=this.data.school;
   this.schoolForm=this.fb.group(
      {
        nom:[{value:this.toUpdate.nom,disabled:true},[Validators.required]],
        addresse:[{value:this.toUpdate.addresse,disabled:true},[Validators.required]],
        email:[{value:this.toUpdate.email,disabled:true},[Validators.required]],
        telephone:[{value:this.toUpdate.telephone,disabled:true},[Validators.required,Validators.minLength(9)]],
      
      }
    )
    console.log(this.schoolForm.get('nom')?.value.value)
}
saveEdit() {
  if(this.schoolForm.valid){
    console.log(this.schoolForm.value)
  }
}
enableField(field: string) {
  this.schoolForm.get(field)?.enable()
  this.schoolForm.get(field)?.reset()
}
}
