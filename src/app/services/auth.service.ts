import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   public  users:any={
      admin:{password:'1234',roles:['STUDENT','ADMIN']},
      user1:{password:'1234',roles:['STUDENT']}
    }
    public username:any;
    public isAuthenticated:boolean =false;
     public roles:string[]=[]
  constructor(private router:Router) { }
  logOut(){
    this.roles=[]
    this.isAuthenticated=false
    this.username=undefined
   this.router.navigateByUrl('/login')
  }
  login(username:string,password:string):boolean{
    if(this.users[username] && this.users[username]['password']==password){
      this.username=username;
      this.isAuthenticated=true
      this.roles=this.users[username]['roles'];
      this.router.navigateByUrl('/admin/schools')
      return true;
    }
    return false
  }
}
