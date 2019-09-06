import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() { }

  registerUser(userObj) {
    this.user = userObj;
  }

  getUser() {
    return this.user;
  }
}
