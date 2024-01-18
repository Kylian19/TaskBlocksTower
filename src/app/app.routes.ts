import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlanningComponent } from './planning/planning.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'planning', component: PlanningComponent},
    { path: 'charts', component: PlanningComponent},
    { path: 'files', component: PlanningComponent},
    { path: 'maps', component: PlanningComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'log-out', component: PlanningComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }