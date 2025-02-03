import { Component, computed, OnInit, signal } from '@angular/core';
import { School } from '../../model/model.school';
import { SchoolsService } from '../../services/schools.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { SchoolEditComponent } from '../school-edit/school-edit.component';

@Component({
  selector: 'app-schools',
  imports: [MatInputModule,MatTableModule,MatIconModule,ReactiveFormsModule,MatSelectModule,MatOptionModule,MatButtonModule,MatCardModule],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css' 
})
export class SchoolsComponent implements OnInit{
selectFile(event: any) {
if(event.target.files.length>0){
  let file=event.target.files[0]
  console.log(file)
  this.schoolForm.patchValue(
    {
      logoSource:file,
      logoName:file.name
    }
  )
}
}
saveForm() {
if(this.schoolForm.valid){

}
}
  schoolForm!:FormGroup
openForm() {
this.formOpened=!this.formOpened
}
delete(arg0: any) {
}
openEdit(element: any) {
  this.dialog.open(SchoolEditComponent,{
    width:'500px',
    disableClose:true,
    enterAnimationDuration:'900ms',
    exitAnimationDuration:'900ms',
    data:{
      school:element
    }
  })
}
  schools=computed<School[]>(()=>this.ss.getSchools())
  dataSource!:any
  formOpened:boolean=false
  displayedColumns:string[]=['id','nom','addresse','telephone','logo','action' ]
  constructor(private ss:SchoolsService,private fb:FormBuilder,private dialog:MatDialog){
  }
ngOnInit(): void {
  this.schoolForm=this.fb.group(
    {
      nom:['',[Validators.required]],
      addresse:['',[Validators.required]],
      email:['',[Validators.required]],
      telephone:['',[Validators.required]],
      logoName:['',[Validators.required]],
      logoSource:['',[Validators.required]],
    }
  )
  this.dataSource= new MatTableDataSource(this.schools())
}
}
