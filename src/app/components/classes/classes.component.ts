import { Component, computed, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ClassesService } from '../../services/classes.service';
import { Classe } from '../../model/model.classe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ClasseAddEditComponent } from '../classe-add-edit/classe-add-edit.component';

@Component({
  selector: 'app-classes',
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule,MatSelectModule,MatOptionModule,
    ReactiveFormsModule,MatInputModule,MatDialogModule,
  ],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent implements OnInit{
  classes=computed<Classe[]>(()=>this.cs.getClasses())
  ngOnInit(): void {
  this.dataSource=new MatTableDataSource(this.classes())
  }
openClasseDialog(element: any) {
  if(element){
      this.dialog.open(ClasseAddEditComponent,{
          width:'500px',
          enterAnimationDuration:'900ms',
          exitAnimationDuration:'900ms',
          disableClose:true,
          data:{
            edit:true,
            classe:element
          }
      })
  }else{
    this.dialog.open(ClasseAddEditComponent,{
      width:'500px',
      enterAnimationDuration:'900ms',
      exitAnimationDuration:'900ms',
      disableClose:true,
      data:{
        edit:false,
        classe:null
      }
  })
  }
}
delete(arg0: any) {
}
dataSource!:any ;
openForm() {
this.formOpened=!this.formOpened;
}
  displayedColumns=['id','nom','option','action']
formOpened: boolean=false;
constructor(private cs:ClassesService,private dialog:MatDialog,){
}
}
