import { Component, computed, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { School } from '../../model/model.school';
import { SchoolsService } from '../../services/schools.service';
import { Classe } from '../../model/model.classe';
import { ClassesService } from '../../services/classes.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-teacher-affect',
  imports: [MatDialogModule,ReactiveFormsModule,MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule],
  templateUrl: './teacher-affect.component.html',
  styleUrl: './teacher-affect.component.css'
})
export class TeacherAffectComponent implements OnInit{
  schools=computed<School[]>(()=>this.ss.getSchools())
  classes=computed<Classe[]>(()=>this.cs.getClasses())
  matieres:string[]=['Mathematiques','Francais','Anglais','histoire','geographie','physique']
  affectForm:any
  teacher:any
constructor(private fb:FormBuilder,private ss:SchoolsService,private cs:ClassesService,@Inject(MAT_DIALOG_DATA) private data:any){

}
ngOnInit(): void {
  this.teacher=this.data.teacher
  this.affectForm=this.fb.group(
    {
      ecole:['',[Validators.required]],
      classe:['',[Validators.required]],
      matiere:['',[Validators.required]]
    }
  )
}
saveAffect(){
  if(this.affectForm.valid){
    console.log(this.affectForm.value)
  }
}
}
