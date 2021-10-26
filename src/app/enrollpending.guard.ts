import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollpendingGuard implements CanActivate {
  constructor(private _auth:AuthService, private router:Router){}
  canActivate():boolean{
    if(this._auth.getEnrollpending()){
return true;
    }
    else{
      this.router.navigate(['/'])
      return false;
    }
  } 
}
