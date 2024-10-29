import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniDashboardPage } from './alumni-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: AlumniDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumniDashboardPageRoutingModule {}
