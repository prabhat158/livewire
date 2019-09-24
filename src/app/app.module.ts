import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WinnerComponent } from './winner/winner.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import {RouterModule,Routes} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinnerComponent,
    SponsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([

      // {path:'',component:HomeComponent},
      {path:'',component:HomeComponent},
      {path:'sponsors',component:SponsersComponent},
      {path:'winner',component:WinnerComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
