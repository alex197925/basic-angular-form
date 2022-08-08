## Angular Form
### Beginning of the Project
1.Check if i have node.js(node -v)

2.Install the Angular cli (npm install -g @angular/cli)

3.Check if it's installed correct(ng version)

4.Navigate to the root of your clone of this repository in the terminal and enter the command (ng new project-name)

5.Inside of the project run (ng serve --port 4500)

6.Open browser in localhost:4500

7.Delete everything from app.component.html(in this file i can write html)


### Let's Do It
- [x] In html file add inputs for the: First name, Last Name, Email, Phone number  with submit button
- [x] Add  select input for the languages 
- [x] Put languages inside of an array
```angular2html
 languages:Array<string> = ['HTML', 'JS', 'PHP', 'TypeScript'];
```
- [x] Using ngFor loop to generate all options
```angular2html
  <select name="name" id="lg">
    <option *ngFor="let language of languages">
      {{language}}
    </option>
```
  [Angular Loop](https://www.delftstack.com/howto/angular/array-of-objects-in-angular/)
- [x] In the app.module.ts i am imported FormsModule from @angular/forms on top of the page.
```angular2html
import { NgModule } from '@angular/core';
----------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
-----------------------------------------------------------
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
```
- [x] An added BrowserModule to imports array
```angular2html
 imports: [
---------------------------------------------------------
    BrowserModule,
---------------------------------------------------------
    AppRoutingModule,
    FormsModule
  ],
```

- [x] Put inside of each input  ```ngModel``` !IMPORTANT.
- [x] Added to every input ```#inputName="ngModel"```!IMPORTANT.
```angular2html
    <label>Phone number</label>
    <div id="input-phone">
      <input
            name="phone"
            #phone="ngModel"
             type="email"
             placeholder="Phone number"
      ngModel>
    </div>
```
- [x] Add to the form ```#formName="ngForm"``` !IMPORTANT
```angular2html
 <form  #formName="ngForm" id="input-container">
```
- [x] Generate class Friend
* To generate class friend use command ```ng generate class Friend.```
- [x] Inside of the file friend.ts add  constructor to the class with all corresponding properties, Getters and Setters.
```typescript

export class Friend {
  private _firstName: string;
  private _secondName: string;
  private _email: string;
  private _phone: number;
  private _language: string;

  constructor(firstName: string, secondName: string, email: string, phone: number, language: string) {
    this._firstName = firstName;
    this._secondName = secondName;
    this._email = email;
    this._phone = phone;
    this._language = language;
  }


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get secondName(): string {
    return this._secondName;
  }

  set secondName(value: string) {
    this._secondName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): number {
    return this._phone;
  }

  set phone(value: number) {
    this._phone = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }
}
```
- [x] In the app.component.ts  i instantiated the friendModule through the friend class with all the properties set to null, add 0 to the property phone.
```typescript
 friendModel = new Friend('', '', '', 0, '');
```
- [x] Imported  Friend  class to app.component.js
```typescript
import {Friend} from "./friend";
```

#### Make changes in app.component.html file
- [x] Changed ngModel in all inputs to ``[(ngModel)]="friendModel.propertyName"``
- [x] On the top of html file, changed ``{{ formName.value | json }}``
to ```{{ friendModel | json }}``` ---- still working perfectly!!

#### Form Validation
- [x] Created class .correct, .incorrect in css file. If input incorrect, border-red!
- [x] Use this website for input validation
 * [Validation website](https://regexr.com/3e48o)
- [x] Displaying button when all inputs is filled correct
- [x] Created function to display in console list of friends
```typescript
 getListOfFriends()  {
    console.log(this.friendModel);
  }
```


### Submit the data to a server
*  add this friend to your friendlist server,
- [x] Generate server with name "addFriendService"- input in terminal command
``ng g s addFriend``.
- [x] Importing HttpClient to the addFriend.service.ts file 
* ```import { HttpClient } from '@angular/common/http';```
- [x] Add a new private property called http to the constructor.Typehint it to be of type HttpClient
```typescript
export class AddFriend {
  private http: HttpClient;
  private url: string = '';


  constructor(http: HttpClient) {
    this.http = http;
  }
```
- [x] Import the HttpClientModule in your app.module.ts,
````typescript
import { HttpClientModule } from '@angular/common/http';
````
- [x]  Add it to the imports array 
```typescript
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
```

- [x] Created property url with empty string
```typescript
export class AddFriend {
  private http: HttpClient;
  private url: string = '';
```

- [x] In app.component.ts imported addFriendService
```typescript
import {AddFriend} from "./add-friend.service";
```
- [x] Created constructor, added private property "addFriendService".

- [x] In app-friend.service.ts, created method call addFriend.In this method wrote post request.
``this.http.post(url, data)``
and return something called an observable
* Observables provide support for passing messages between parts of your application. They are used frequently in Angular and are a technique for event handling, asynchronous programming, and handling multiple values.

- [x] Import service to the  app.component.ts, created constructor and  add private property "addFriendService".

### Send data to the local api
* When submit data and displaying in console, status 404! 
But it's ok!!

- [x] In server file change PORT: 6969 to PORT: 9000
* from terminal inside of server folder run command ``node server``.
* open you tab type http://localhost:9000/ and its working!!!
* I see "Hello from server". That is because the get function in the server file with the root "/" as it's path sent it as a response.

- [x] Created get function, to get all Friends.
```typescript
app.get ('/allFriends', function (request, response) {
    response.send(allFriends);
})
```
- [x] In the add-friend.service.ts in the class  AddFriendService 
in private url: string = ''; changed to:
````typescript
export class AddFriendService {
  private http: HttpClient;
  private url: string = 'http://localhost:9000/';
````
- [x] Changed post method to:
````typescript
app.post('/allFriends', function (request, response) {
    response.status(200).send({"message": "Data received"});
    allFriends.push(request.body);
});
````
* Now i can add new friend to array!!!
