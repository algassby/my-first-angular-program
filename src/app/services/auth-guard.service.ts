import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGard implements CanActivate{
    constructor(private authService:AuthService, private router:Router){
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean > | Promise<boolean>  {
        if(this.authService.isAuth){
            return true;
        }
        else{
            this.router.navigate(['/auth']);
        }
    }

}