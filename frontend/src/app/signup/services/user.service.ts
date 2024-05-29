import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user?:{
    username:string,
    email:string
  }

  setUser(newUser:{
    username:string,
    email:string
  }){
    this.user = newUser;
  }
}
