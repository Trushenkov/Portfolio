import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FeaturesComponent } from './features/features.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainContentComponent, pathMatch: 'full' },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
