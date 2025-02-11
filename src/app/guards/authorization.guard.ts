import { ActivatedRouteSnapshot, CanActivate,  GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
export class AuthorizationGuard implements  CanActivate{
  constructor(){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return true
  }

}