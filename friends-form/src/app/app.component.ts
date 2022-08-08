import { Component } from '@angular/core';
import {Friend} from "./friend";
import { AddFriendService} from "./add-friend.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})




export class AppComponent {
  languages:Array<string> = ['HTML', 'JS', 'PHP', 'TypeScript', 'Java', 'C#'];
  friendModel = new Friend('', '', '', 0, '');

  constructor(private addFriendService:  AddFriendService) {}


  ngOnInit(): void {
  }


  getListOfFriends()  {
    console.log(this.friendModel);
    const observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log('success!');
      },
      error: (error) => {
        console.log(error);
        console.log('failed');
      },
    });
  }

}


