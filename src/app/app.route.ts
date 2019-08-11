import { Routes } from '@angular/router';

import { LoginPageComponent } from './pages/auth-pages/login-page/login-page.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { ErrorComponent } from './pages/error/error.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  }, {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
