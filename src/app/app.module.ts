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
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';


const appRoutes: Routes = [

  {path:'appareils', canActivate:[AuthGard],component:ApparareilViewComponent},
  {path:'appareils/:id',canActivate:[AuthGard], component:SingleAppareilComponent},
  {path:'edit', canActivate:[AuthGard], component: EditAppareilComponent},
  {path:'auth', component:AuthComponent},
  {path:'', component:ApparareilViewComponent},
  {path:'not-found', component:FourOhFourComponent},
  {path:'**', redirectTo:'not-found'}

]


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    ApparareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
