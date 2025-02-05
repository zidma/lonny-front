import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-classe-add-edit',
  imports: [MatDialogModule,ReactiveFormsModule,MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule,MatIconModule],
  templateUrl: './classe-add-edit.component.html',
  styleUrl: './classe-add-edit.component.css'
})
export class ClasseAddEditComponent implements OnInit {
  isEditing:boolean=false
  toUpdate!:any
  classeForm!: any;
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) private data:any,private ref:MatDialogRef<ClasseAddEditComponent>){
  }
  ngOnInit(): void {
    this.toUpdate=this.data.classe
    this.isEditing=this.data.edit;
   if(this.isEditing){
    this.classeForm=this.fb.group(
      {
        nom:[{value:this.toUpdate.nom,disabled:true},[Validators.required]],
        option:[{value:this.toUpdate.option,disabled:true},[Validators.required]],
      }
    )
   }else{
    this.classeForm=this.fb.group(
      {
        nom:['',[Validators.required]],
        option:['',[Validators.required]],
      }
    )
   }
  }
enableField(field:string) {
  this.classeForm.get(field).enable()
  this.classeForm.get(field).reset()
}
saveClasse() {
  if(this.classeForm.valid){
    console.log(this.classeForm.value)
  }
  this.ref.close(this.classeForm.value)
}


}
