import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'users',
  templateUrl: 'public/users/users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[];
  newUser: User = {
    name: '',
    age: 0,
    showUpdateModal: false
  }
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getUsers()
                    .then((data: any) => {
                      this.users = data.users; 
                    });
  }
  selectUser(user: User): void {
    user.showUpdateModal = !user.showUpdateModal;
  }
  updateUser(user: User): void {
    this.usersService.updateUser(user)
                     .then((data: any) => {
                       user.name = data.name;
                       user.showUpdateModal = false;
                     });
  }
  createUser(user:User): void {
    this.usersService.createUser(user)
                     .then((data: any) => {
                       this.users.push(data.newUser);
                       this.cleanNewUserForm();
                     });
  }

  cleanNewUserForm(): void {
    this.newUser = {
      name: '',
      age: 0,
      showUpdateModal: false
    }
  }
}