import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ScorekeeperComponent } from './components/scorekeeper/scorekeeper.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginActivate } from './authguard';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
  , { path: 'logout', component: LogoutComponent, canActivate: [LoginActivate]}
  , { path: 'scorekeeper', component: ScorekeeperComponent, canActivate: [LoginActivate]}
  , { path: 'matches', component: MatchesComponent , canActivate: [LoginActivate]}
  , { path: 'about', component: AboutComponent , canActivate: [LoginActivate]}
  , { path: 'home', component: LandingComponent, canActivate: [LoginActivate]}
  , { path: '', redirectTo: '/home', pathMatch: 'full'}
  , { path: '**', component: NotfoundComponent, canActivate: [LoginActivate]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
