import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubscribeComponent } from './subscribe/subscribe.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { Pizza } from './models/Pizza.model';
import { LoginactivateService } from './service/loginactivate.service';


const routes: Routes = [

  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'home' , component: HomeComponent, canActivate:[LoginactivateService]},
  {path: 'cart' , component: CartComponent, canActivate:[LoginactivateService]},
{path: 'Pizza' , component: Pizza, canActivate:[LoginactivateService]},
{ path: 'Pizza/:id', component: Pizza, canActivate:[LoginactivateService] },
{ path: 'cart', component: CartComponent, canActivate:[LoginactivateService] },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);
