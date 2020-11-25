import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { ApparareilViewComponent } from './apparareil-view/apparareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [

  {path:'appareils', component:ApparareilViewComponent},
  {path:'auth', component:AuthComponent},
  {path:'', component:ApparareilViewComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    ApparareilViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
