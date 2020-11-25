import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: String = "";
  @Input() appareilStatus: string ="";
  @Input() indexOfAppareil: number=0;
  appareils: any[] = [];

  //appareilName: string = 'Machine à laver';
 // appareilStatus: string = 'éteint';
  

  constructor(private appareilService: AppareilService) { }

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
onSwitchOn(){
  this.appareilService.switchOnOne(this.indexOfAppareil);
}

onSwitchOff(){
  this.appareilService.switchOffOne(this.indexOfAppareil);
}
onSwitch() {
  if(this.appareilStatus === 'allumé') {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  } else if(this.appareilStatus === 'éteint') {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
}
}
