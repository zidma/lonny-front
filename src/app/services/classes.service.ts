import { effect, Injectable, signal } from '@angular/core';
import { Classe } from '../model/model.classe';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
 classes=signal<Classe[]>([])
  constructor() { 
    effect(()=>{
      this.classes.set(
        [
          {id:1,nom:'petite section 1',option:null},
          {id:2,nom:'5eme',option:null},
          {id:3,nom:'terminal',option:'ss'},
          {id:4,nom:'premiere',option:'sm'},
          {id:5,nom:'seconde',option:'se'},
        ]
      )
    })
  }
  getClasses(){
    return this.classes();
  }
}
