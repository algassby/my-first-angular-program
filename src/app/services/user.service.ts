import { Subject } from 'rxjs';
import { User } from '../model/User.model';

export class UserService{
    private users:User[] = [
        {
            firstName:'James',
            lastName:'Brown',
            email:'jamesbrown@gmail.com',
            drinkPreference:'Coca',
            hobbies:[
              'dancer',
              'Chanter'
            ]
          }
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }
    addUser(user:User){
        this.users.push(user);
        this.emitUsers();
    }
}