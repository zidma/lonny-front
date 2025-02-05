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
          {id:1,texte:'question 1',points:2},
          {id:2,texte:'question 2',points:3},
          {id:3,texte:'question 3',points:1},
          {id:4,texte:'question 4',points:5},
          {id:5,texte:'question 5',points:6}, 
        ]
      )
    })
   }
   getQuestions(){
    return this.questions()
   }
}
