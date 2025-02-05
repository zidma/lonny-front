import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-add-edit',
  imports: [ReactiveFormsModule,MatInputModule,MatIconModule,MatButtonModule,MatDialogModule],
  templateUrl: './user-add-edit.component.html',
  styleUrl: './user-add-edit.component.css'
})
export class UserAddEditComponent implements OnInit{
saveUser() {
if(this.userForm.valid){
  console.log(this.userForm.value)
}
}
enableField(field: string) {
this.userForm.get(field).enable()
this.userForm.get(field).reset()
}
  userForm!:any
  isEditing :boolean=false;
  constructor(private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) private data:any){

  }
  user!:any
ngOnInit(): void {
  this.user=this.data.user;
  this.isEditing=this.data.edit
  this.userForm=this.fb.group(
    {
      username:[{value:this.isEditing?this.user.userName:'',disabled:this.isEditing?true:false},[Validators.required]],
      role:[{value:this.isEditing?this.user.role:'',disabled:this.isEditing?true:false},[Validators.required]],
      password:[{value:this.isEditing?this.user.password:'',disabled:this.isEditing?true:false},[Validators.required]]
    }
  )
}

}
