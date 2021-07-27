import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor( public http: HttpClient) { }
  public user = "Olaitan"
  public name = new BehaviorSubject("")
  getUser(){
    return this.user
  }

  getUsers(){
    return this.http.get('https://api.github.com/users')
  }
  getusername(username:any){
    return this.http.get(`https://api.github.com/users/${username}`)
  }
  getfollowers(username:any){
    return this.http.get(`https://api.github.com/users/${username}/followers`)
  }

  // "https://api.github.com/users/mojombo/followers"
  // getavatar(username:any){
  //   return this.http.get(`https://api.github.com/users/${username}/&followers`)
  // }

  nameChanger(newValue:any){
    this.name.next(newValue)
  }
}
