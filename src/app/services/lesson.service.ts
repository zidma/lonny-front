import { effect, Injectable, signal } from '@angular/core';
import { Lesson } from '../model/model.cours';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  lessons=signal<Lesson[]>([]);
  constructor() {
    effect(()=>{
    let   cours:Lesson[]=[]
      for(let i=1;i<11;i++){
        cours.push(
          {id:i,title:"title "+i,chapter:"chapter "+i,discipline:"discipline "+i,content:"content "+i}
        )
      }
      this.lessons.set(cours)
    })
   }
   getLessons():Lesson[]{
    return this.lessons();
   }
   getLessonById(id:number):any{
    return this.lessons().find(l=>l.id===id);
   }
   delete(id:number):Lesson[]{
   return  this.lessons().filter(l=>l.id!==id);
   }
   getLessonByTitle(title:string):Lesson|undefined{
    return this.lessons().find(l=>l?.title===title)
   }

}
