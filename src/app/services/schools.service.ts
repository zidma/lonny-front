import { effect, Injectable, signal } from '@angular/core';
import { School } from '../model/model.school';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  schools=signal<School[]>([])
  constructor() { 
    effect(()=>{
      this.schools.set([
        {id:1,nom:"koffi",addresse:"nongo",telephone:"01020504",email:"koffi@gmail.com",logo:"koffi logo"},
        {id:2,nom:"manquepas ecole primaire",addresse:"manquepas",telephone:"010250504",email:"mqp@gmail.com",logo:"mqp logo"},
        {id:3,nom:"jean calvin",addresse:"manquepas",telephone:"0102704",email:"jc@gmail.com",logo:"koffi logo"},
        {id:1,nom:"koffi",addresse:"nongo",telephone:"01020504",email:"koffi@gmail.com",logo:"koffi logo"},
        {id:1,nom:"koffi",addresse:"nongo",telephone:"01020504",email:"koffi@gmail.com",logo:"koffi logo"}
      ])
    })
  }
  getSchools(){
    return this.schools();
  }
}
