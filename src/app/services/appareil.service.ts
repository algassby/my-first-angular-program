import { ArrayType } from '@angular/compiler';
import { Subject } from 'rxjs';
import { SingleAppareilComponent } from '../single-appareil/single-appareil.component';

export class AppareilService{
  appareilSubject = new Subject<any[]>()
 private   appareils = [
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
      //changement des appareils , emettre une copie avec slice()
      emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
      }
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
        this.emitAppareilSubject();
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
      }
      
      switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();
      }
}