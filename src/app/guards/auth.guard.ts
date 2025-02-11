import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn:'root'
})
export class AuthGuard {
  constructor(private router:Router,private authService:AuthService){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):MaybeAsync<GuardResult> {
    if(this.authService.isAuthenticated){
      console.log(this.authService.username1)
      this.router.navigateByUrl('/admin')
      return true
    }else{
      this.router.navigateByUrl('/login')
      return false
    } 
  }
}
