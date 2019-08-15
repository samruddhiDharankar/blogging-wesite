import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

let config = {
  apiKey: "AIzaSyCrc-S02QHuKOHPJGhmJQO10lu1TsADshE",
  authDomain: "scribe-c0c6b.firebaseapp.com",
  databaseURL: "https://scribe-c0c6b.firebaseio.com",
  projectId: "scribe-c0c6b",
  storageBucket: "",
  messagingSenderId: "784685507167",
  appId: "1:784685507167:web:5056329602a6b296"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
