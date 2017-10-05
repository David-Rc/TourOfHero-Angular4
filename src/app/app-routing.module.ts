import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashbord.component/dashboard.component';
import { HeroesComponent }      from './heroes.component/heroes.component';
import { HeroDetailComponent }  from './hero-detail.component/hero-detail.component';

const routes: Routes =
  [
    {path: '', redirectTo: '/Dashboard', pathMatch: 'full'},
    {path: 'Heroes', component: HeroesComponent},
    {path: 'Dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
