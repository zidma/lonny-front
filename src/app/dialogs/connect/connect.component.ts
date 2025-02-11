import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-connect',
  imports: [ReactiveFormsModule,MatInputModule,MatDialogModule,MatButtonModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent implements OnInit {
connectForm!: FormGroup;
Connection() {
  if(this.connectForm.valid){
    this.ref.close(this.connectForm.value)
  }
}
constructor(private fb:FormBuilder,private authService:AuthService,private ref:MatDialogRef<ConnectComponent>){

}
ngOnInit(): void {
  this.connectForm=this.fb.group(
    {
      password:['',[Validators.required,Validators.minLength(4)]]
    }
  )
}
close(){
  this.ref.close()
}

}
