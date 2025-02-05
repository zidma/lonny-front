import { effect, Injectable, signal } from '@angular/core';
import { User } from '../model/model.user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 users=signal<User[]>([])
  constructor() { 
    effect(()=>{
      this.users.set(
        [
          {
            id: 1, userName: 'user1@gmail.Com', role: 'admin',
            password: '12345'
          },
          {
            id: 2, userName: 'user2@gmail.Com', role: 'student',
            password: '12345'
          },
          {
            id: 3, userName: 'user3@gmail.Com', role: 'superviseur',
            password: '12345'
          },
          {
            id: 4, userName: 'user4@gmail.Com', role: 'enseignant',
            password: '12345'
          },{
            id: 5, userName: 'user5@gmail.Com', role: 'entreprise',
            password: '12345'
          },
        ]
      )
    })
  }
  getUsers(){
    return this.users();
  }
}
