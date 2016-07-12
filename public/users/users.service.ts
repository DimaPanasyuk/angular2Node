import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private http: Http) { }
  getUsers(): any {
    return this.http.get('/api/users')
                    .toPromise()
                    .then(this.parseResponse);
  }
  updateUser(user: User): any {
    let url = `/api/users/${user.name}`;
    let dataToSend = user;
    return this.http.put(url, dataToSend)
                    .toPromise()
                    .then(this.parseResponse);
  }
  createUser(user: User): any {
    let url = `/api/users`;
    let dataToSend = user;
    return this.http.post(url, dataToSend)
                    .toPromise()
                    .then(this.parseResponse);
  }
  parseResponse(res: any) {
    return res.json();
  }
}