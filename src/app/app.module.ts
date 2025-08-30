import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { WormComponent } from './components/Actors/Player/common/worm/worm.component';
import { CocoonComponent } from './components/Actors/Player/common/cocoon/cocoon.component';
import { RadiantButterflyComponent } from './components/Actors/Player/cosmic/radiant-butterfly/radiant-butterfly.component';
import { TargetComponent } from './components/minigame/target/target.component';
import { LoginComponent } from './pages/login/login.component';
import { StoryComponent } from './pages/story/story.component';
import { DefeatedComponent } from './pages/defeated/defeated.component';
import { FightComponent } from './pages/fight/fight.component';
import { MapComponent } from './pages/map/map.component';
import { StatsComponent } from './pages/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent, 
    WormComponent, CocoonComponent, RadiantButterflyComponent, TargetComponent, LoginComponent, StoryComponent, DefeatedComponent, FightComponent, MapComponent, StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
