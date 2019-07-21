import { Routes } from '@angular/router';

import { LoginPageComponent } from './pages/auth-pages/login-page/login-page.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  }, {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
