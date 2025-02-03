import { AfterViewInit, Component, computed, OnInit, signal, ViewChild } from '@angular/core';
import { Lesson } from '../../model/model.cours';
import { LessonService } from '../../services/lesson.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CoursDashboardComponent } from "../cours-dashboard/cours-dashboard.component";
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-cours',
  imports: [MatTableModule, MatPaginatorModule,MatCardModule,MatInputModule, CoursDashboardComponent,MatIconModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit,AfterViewInit {
  formOpened:boolean=false;
  lessonForm!:FormGroup
  data=computed<Lesson[]>(()=>this.ls.getLessons())
  displayedColumns=['id','discipline','chapitre','title','action']
  dataSource!:any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private ls:LessonService,private fb:FormBuilder){
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
  this.ls.delete(id)
}
openForm(){
  this.formOpened=!this.formOpened
}
saveForm(){
  console.log(this.lessonForm.value)
}
}
