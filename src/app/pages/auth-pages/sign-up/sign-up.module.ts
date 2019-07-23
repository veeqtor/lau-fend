import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthSharedModule } from '../shared/auth-shared.module';
import { SignUpComponent } from './sign-up.component';
import { SignupFormComponent } from '../../../shared/components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignupFormComponent,
  ],

  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    AuthSharedModule,
  ],
})

export class SignUpModule { }
