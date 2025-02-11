import { effect, Injectable, signal } from '@angular/core';
import { Teacher } from '../model/model.teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
teachers=signal<Teacher[]>([])
  constructor() { 
    effect(()=>{
      this.teachers.set([
        {id:1,nom:'diallo',prenom:'ahmed',telephone:'6294587654',email:'ahmed@gmail.com',photo:''},
        {id:2,nom:'bah',prenom:'mamadou',telephone:'60257654',email:'bah@gmail.com',photo:''},
        {id:3,nom:'sow',prenom:'abdoul',telephone:'600087654',email:'sowd@gmail.com',photo:''},
        {id:4,nom:'barry',prenom:'alpha',telephone:'629152557654',email:'barry@gmail.com',photo:''},
        {id:5,nom:'camara',prenom:'aly',telephone:'62941127654',email:'aly@gmail.com',photo:''},
      ])
    })
  }
  getTeachers(){
    return this.teachers()
  }
}
