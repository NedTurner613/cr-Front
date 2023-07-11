import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GimmegimmeComponent } from './components/gimmegimme/gimmegimme.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuickstatsComponent } from './components/quickstats/quickstats.component';
const routes: Routes = [
  { path: 'gimmegimme', component: GimmegimmeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'quick-stats', component: QuickstatsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
