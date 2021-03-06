import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import 'rxjs/Rx';


import { AppComponent } from './app.component';
import { AllPinsComponent } from './all-pins/all-pins.component';
import { MyPinsComponent } from './my-pins/my-pins.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { AuthService } from './auth/auth.service';
import { PinsService } from './pins.service';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'all-pins', component: AllPinsComponent },
  { path: 'my-pins',      component: MyPinsComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AllPinsComponent,
    MyPinsComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
   //   { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    PinsService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
