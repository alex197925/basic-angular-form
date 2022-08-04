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
