import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { StoryComponent } from './pages/story/story.component';
import { DefeatedComponent } from './pages/defeated/defeated.component';
import { FightComponent } from './pages/fight/fight.component';
import { MapComponent } from './pages/map/map.component';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [
  { path: '', redirectTo: 'fight', pathMatch: 'full' }, // default route
  { path: 'login', component: LoginComponent },
  { path: 'story', component: StoryComponent },
  { path: 'fight', component: FightComponent },
  { path: 'map', component: MapComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'defeated', component: DefeatedComponent },
  { path: '**', redirectTo: 'login' } // fallback for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
