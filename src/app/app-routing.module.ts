import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { CreateIpTableComponent } from './components/create-ip-table/create-ip-table.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'menu',
    component: HomeComponent
  }, 
  {
    path: 'iptables',
    component: CreateIpTableComponent
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CreateIpTableComponent]
