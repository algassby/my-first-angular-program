import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  secondes:number =0;
 constructor(){
   
 }
  ngOnInit(): void {
   const count = Observable.interval(1000);
   //subscribe prend trois methode , subscribe permet de s'abonner à un observable
   count.subscribe(
     (value:number)=>{
       this.secondes =value;
     },
     (error:any)=>{
       console.log("Error");
     },
     ()=>{
      console.log("Observable completé");
     }
   )
  }



}
