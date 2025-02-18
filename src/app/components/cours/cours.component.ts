import { AfterViewInit, Component, computed, OnInit, signal, ViewChild } from '@angular/core';
import { Lesson } from '../../model/model.cours';
import { LessonService } from '../../services/lesson.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { CoursEditComponent } from '../cours-edit/cours-edit.component';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-cours',
  imports: [MatTableModule, MatPaginatorModule,MatCardModule,MatInputModule,MatIconModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit,AfterViewInit {
trackChange(event: any) {
  console.log(event.target?.value)
}
displayLesssonDetail(id: number) {
console.log(id)
this.router.navigateByUrl(`/admin/cours/${id}`)
}
  formOpened:boolean=false;
  lessonForm!:FormGroup
  data=computed<Lesson[]>(()=>this.ls.getLessons())
  displayedColumns=['id','discipline','chapter','title','action']
  dataSource!:any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private ls:LessonService,private fb:FormBuilder,private dialog:MatDialog,private router:Router,private commonService:CommonService){
  }
  ngOnInit(): void {
    this.lessonForm=this.fb.group(
      {
        title:['',[Validators.required]],
        chapitre:['',[Validators.required]],
        discipline:['',[Validators.required]],
        ecole:['',[Validators.required]],
        contenu:['',[Validators.required,Validators.maxLength(255)]],
      }
    )
   this. dataSource = new MatTableDataSource<Lesson>(this.data());
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

delete(id:number){
  this.commonService.displayConnectDialog({component:'cours',operation:'delete',id:id})
}
openForm(){
  this.formOpened=!this.formOpened
}
saveForm(){
  console.log(this.lessonForm.value)
}
    
openEdit(element:any){
  console.log(element)
 const _opened=   this.dialog.open(CoursEditComponent,{
      width:'600px',
      height:'500px',
      enterAnimationDuration:'800ms',
      exitAnimationDuration:'800ms',
      disableClose:true,
      data:{
        lesson:element
      }
    })
    _opened.afterClosed().subscribe(data=>{
      if(data!==false){
        console.log(data)
      }
    })
}
}
