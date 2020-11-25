import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean = false;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
//connexion
  onSignIn(){
    this.authService.signIn().then(
      ()=>{
        console.log('connexion reussie');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    )
  }

  //deconnexion

  onSignOut(){
    this.authService.signOut();
    console.log("deconnexion");
    this.authStatus = this.authService.isAuth;
  }
}
