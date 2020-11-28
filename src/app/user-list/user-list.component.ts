import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../model/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users:User[] = [];
  userSubscription:Subscription = new Subscription();
  constructor(private userService:UserService) { }
 

  ngOnInit(): void {

  this.userSubscription = this.userService.userSubject.subscribe(
    (users:User[])=>{
      this.users = users;
    }
   
  );
  this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
