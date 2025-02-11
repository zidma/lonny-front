import { effect, Injectable, signal } from '@angular/core';
import { Question } from '../model/model.question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
questions=signal<Question[]>([])
  constructor() {
    effect(()=>{
      this.questions.set(
        [
          {id:1,texte:'question 1',points:2,lesson:1},
          {id:2,texte:'question 2',points:3,lesson:3},
          {id:3,texte:'question 3',points:1,lesson:4},
          {id:4,texte:'question 4',points:5,lesson:1},
          {id:5,texte:'question 5',points:6,lesson:3}, 
        ]
      )
    })
   }
   getQuestions(){
    return this.questions()
   }
   getlessonQuestions(lesson:number){
    return this.questions().find(q=>q.lesson==lesson);
   }
}
