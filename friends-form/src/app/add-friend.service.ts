
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Friend} from "./friend";


@Injectable({
  providedIn: 'root'
})


export class AddFriendService {
  private http: HttpClient;
  private url: string = '';


  constructor(http: HttpClient) {
    this.http = http;
  }

  public addFriend(data: Friend){
   return  this.http.post(this.url, data)
  }
}
