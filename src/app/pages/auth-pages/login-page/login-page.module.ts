import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';
import { AuthSharedModule } from '../shared/auth-shared.module';
import { LoginFormComponent } from '../../../shared/components/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    AuthSharedModule,
  ],
})

export class LoginPageModule {}
