import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatInputModule,MatCardModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginGroup!:FormGroup
 constructor(private fb:FormBuilder,private authService:AuthService){
 }
 ngOnInit(): void {
  this.loginGroup=this.fb.group(
   {
     username:['',[Validators.required]],
     password:['',[Validators.required,Validators.minLength(4)]]
   }
  )
}
login() {
  if(this.loginGroup.valid){
    console.log(this.loginGroup.value)
    let username=this.loginGroup.value.username;
    let password=this.loginGroup.value.password
  this.authService.login(username,password)
  }
  }
}
