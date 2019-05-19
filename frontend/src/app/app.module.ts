import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScorekeeperComponent } from './components/scorekeeper/scorekeeper.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LandingComponent } from './components/landing/landing.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AboutComponent } from './components/about/about.component';
import { ScoreformComponent } from './components/scoreform/scoreform.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScorekeeperComponent,
    MatchesComponent,
    NotfoundComponent,
    LandingComponent,
    ScheduleComponent,
    AboutComponent,
    ScoreformComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
