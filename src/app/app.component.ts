import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
 
  counterSubscription: Subscription = new Subscription();
  secondes:number =0;
 constructor(){
   
 }
  
  ngOnInit(): void {
   const count = Observable.interval(1000);
   //subscribe prend trois methode , subscribe permet de s'abonner à un observable

   this.counterSubscription = count.subscribe(
     (value:number)=>{
       this.secondes = value;
     }
   );
  }
//desctruction du subscribe
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }



}
