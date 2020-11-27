import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-apparareil-view',
  templateUrl: './apparareil-view.component.html',
  styleUrls: ['./apparareil-view.component.scss']
})
export class ApparareilViewComponent implements OnInit {

   lastUpdate : any = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
 /*  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';*/
  isAuth = false;

  appareils:any[]=[];
  constructor(private appareilService:AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  appareilSubscription : Subscription = new Subscription();

  ngOnInit(){
    //this.appareils = this.appareilService.appareils;
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils:any[])=>{
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }
  onAllumer() {
    this.appareilService.switchOnAll();
}
onEteindre(): null |void {
  if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
    this.appareilService.switchOffAll();
  } else {
    return null;
  }
}
}
