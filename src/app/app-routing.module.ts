import {AboutComponent} from './about/about.component';
import {DevelopStackComponent} from './develop-stack/develop-stack.component';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AchievementsComponent} from './achievements/achievements.component';
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'develop-stack', component: DevelopStackComponent},
  {path: 'about', component: AboutComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
