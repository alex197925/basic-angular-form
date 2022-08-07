import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Friend} from "./friend";


@Injectable({
  providedIn: 'root'
})


export class AddFriend {
  private http: HttpClient;
  private url: string = '';


  constructor(http: HttpClient) {
    this.http = http;
  }

  public addFriend(parameter: Friend){
    this.http.post(url, data)
  }
}
