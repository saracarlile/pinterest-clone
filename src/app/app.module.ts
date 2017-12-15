import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AllPinsComponent } from './all-pins/all-pins.component';
import { MyPinsComponent } from './my-pins/my-pins.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { AuthService } from './auth/auth.service';


const appRoutes: Routes = [
  { path: 'all-pins', component: AllPinsComponent },
  { path: 'my-pins',      component: MyPinsComponent },
  { path: '',
    redirectTo: '/all-pins',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AllPinsComponent,
    MyPinsComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
   //   { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
