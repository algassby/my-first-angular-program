import { ArrayType } from '@angular/compiler';
import { Subject } from 'rxjs';
import { SingleAppareilComponent } from '../single-appareil/single-appareil.component';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService{

  appareilSubject = new Subject<any[]>()
 private   appareils = [];
      constructor(private httpClient:HttpClient){

      }
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

      addAppareil(name:string, status:string){
        const appareilObject = {
          id:0,
          name:'',
          status:''

        };
        //recuperation des infos
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length-1)].id+1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();

      }
//recuperer les les objets enregistré dans le serveur
      saveAppareilsToServer(){
        this.httpClient
        //post, put il est préfable de mettre put pour écraser le neoud enregistré
        .put('https://http-client-demo-d142f.firebaseio.com/appareils.json', this.appareils)
        .subscribe(
          ()=>{
            console.log('enregistrement terminé');
          },
          (error)=>{
              console.log('Erreur de sauvegarde!'+error);
          }
        )

      }
      getAppareilsToServer(){
        this.httpClient
        .get<any>('https://http-client-demo-d142f.firebaseio.com/appareils.json')
        .subscribe(
          (response)=>{
            this.appareils = response;
            this.emitAppareilSubject();
          },
          (error)=>{
            console.log('erreur de chatgement: '+error);
          }
        );

      }

      
}