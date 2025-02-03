import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-connect',
  imports: [ReactiveFormsModule,MatInputModule,MatDialogModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent implements OnInit {
connectForm!: FormGroup;
Connection() {
}
constructor(private fb:FormBuilder,private authService:AuthService){
  
}
ngOnInit(): void {
  
}
}
