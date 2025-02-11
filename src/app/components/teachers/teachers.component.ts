import { Component, computed, OnInit } from '@angular/core';
import { Teacher } from '../../model/model.teacher';
import { TeacherService } from '../../services/teacher.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TeacherAddEditComponent } from '../teacher-add-edit/teacher-add-edit.component';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { TeacherAffectComponent } from '../teacher-affect/teacher-affect.component';

@Component({
  selector: 'app-teachers',
  imports: [MatCardModule,MatTableModule,MatButtonModule,MatIconModule,MatInputModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent implements OnInit {
affecter(element:Teacher) {
  this.dialog.open(TeacherAffectComponent,{
    width:'500px',
    enterAnimationDuration:'900ms',
    exitAnimationDuration:'900ms',
    disableClose:true,
    data:{
      teacher:element
    }
  })
}
teacherDetails(id:number) {
this.router.navigateByUrl(`/admin/teachers/${id}`)
}
delete(arg0: any) {
}
openTeacherDialog(element: any) {
  if(element){
    this.dialog.open(TeacherAddEditComponent,{
      width:'500px',
      enterAnimationDuration:'900ms',
      exitAnimationDuration:'900ms',
      data:{
        teacher:element,
        edit:true
      }
    })
  }else{
    this.dialog.open(TeacherAddEditComponent,{
      width:'500px',
      enterAnimationDuration:'900ms',
      exitAnimationDuration:'900ms',
      data:{
        teacher:null,
        edit:false
      }
    })
  }
}
teachers=computed<Teacher[]>(()=>this.ts.getTeachers())
dataSource:any
displayedColumns:string[]=['id','nom','prenom','telephone','action']
formOpened: any;
constructor(private ts:TeacherService,private dialog:MatDialog,private router:Router){}
  ngOnInit(): void {
   this.dataSource=new MatTableDataSource(this.teachers())
  }
}
