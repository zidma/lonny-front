import { effect, Injectable, Signal, signal } from '@angular/core';
import { Lesson } from '../model/model.cours';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
 public lessons=signal<Lesson[]>([]);
  constructor() {
    effect(()=>{
    this.lessons.set([
      {id:1,title:"title "+1,chapter:"chapter "+1,discipline:"discipline "+1,content:"content "+1},
      {id:2,title:"title "+2,chapter:"chapter "+2,discipline:"discipline "+2,content:"content "+2},
      {id:3,title:"title "+3,chapter:"chapter "+3,discipline:"discipline "+3,content:"content "+3},
      {id:4,title:"title "+4,chapter:"chapter "+4,discipline:"discipline "+4,content:"content "+4},
      {id:5,title:"title "+5,chapter:"chapter "+5,discipline:"discipline "+5,content:"content "+5},
      {id:6,title:"title "+6,chapter:"chapter "+6,discipline:"discipline "+6,content:"content "+6},
      {id:7,title:"title "+7,chapter:"chapter "+7,discipline:"discipline "+7,content:"content "+7},
      {id:8,title:"title "+8,chapter:"chapter "+8,discipline:"discipline "+8,content:"content "+8},
      {id:9,title:"title "+9,chapter:"chapter "+9,discipline:"discipline "+9,content:"content "+9},
      {id:10,title:"title "+10,chapter:"chapter "+10,discipline:"discipline "+10,content:"content "+10},
    ])
    })
   }
   getLessons(){
    return this.lessons();
   }
   getLessonById(id:number){
    return this.lessons().find(l=>l.id===id);
   }
   delete(id:number){
    this.lessons.update(
      state=>state.filter(l=>l.id!==id)
      
    )
    console.log(this.lessons())
   }
   getLessonByTitle(title:string){
    return this.lessons().find(l=>l?.title===title)
   }
recherche(saisie:any){
   this.lessons.update(
    state=>state.filter(l=>l.title.toLowerCase().includes(saisie?.toLowerCase()))
   )
}
}
