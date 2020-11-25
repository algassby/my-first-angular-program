import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: String = "";
  @Input() appareilStatus: string ="";

  //appareilName: string = 'Machine à laver';
 // appareilStatus: string = 'éteint';
  

  constructor() { }

  ngOnInit(): void {
  }
/** status */
  getStatus() {
    return this.appareilStatus;
  }
/** couleur */
  getColor() : String  | void{
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}


}
