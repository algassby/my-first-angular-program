import { ArrayType } from '@angular/compiler';
import { SingleAppareilComponent } from '../single-appareil/single-appareil.component';

export class AppareilService{
    appareils = [
        {
          id:1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id:2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id:3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
//recuperer l'appareil par son id
      getAppareilById(id:number):any{
        const appareil = this.appareils.find(
            (AppareilObject)=>{
              return AppareilObject.id === id;
            }
        );
            return appareil;
      }
      switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
        }
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
      }
      
      switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
      }
}