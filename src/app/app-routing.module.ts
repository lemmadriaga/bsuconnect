import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'student-dashboard',
    loadChildren: () =>
      import('./student-dashboard/student-dashboard.module').then(
        (m) => m.StudentDashboardPageModule
      ),
  },
  {
    path: 'alumni-dashboard',
    loadChildren: () =>
      import('./alumni-dashboard/alumni-dashboard.module').then(
        (m) => m.AlumniDashboardPageModule
      ),
  },
  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardPageModule
      ),
    canActivate: [AdminGuard],
  },
  {
    path: 'faculty-dashboard',
    loadChildren: () =>
      import('./faculty-dashboard/faculty-dashboard.module').then(
        (m) => m.FacultyDashboardPageModule
      ),
  },
  {
    path: 'forum',
    loadChildren: () =>
      import('./tabs/forum/forum.module').then((m) => m.ForumPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
