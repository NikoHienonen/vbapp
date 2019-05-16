import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ScorekeeperComponent } from './components/scorekeeper/scorekeeper.component';
import { StandingsComponent } from './components/standings/standings.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
  , { path: 'scorekeeper', component: ScorekeeperComponent}
  , { path: 'standings', component: StandingsComponent}
  , { path: 'schedule', component: ScheduleComponent}
  , { path: 'about', component: AboutComponent}
  , { path: 'home', component: LandingComponent}
  , { path: '', redirectTo: '/home', pathMatch: 'full'}
  , { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
