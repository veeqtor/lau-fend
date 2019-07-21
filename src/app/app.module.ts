import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpModule } from './pages/auth-pages/sign-up/sign-up.module';
import { LoginPageModule } from './pages/auth-pages/login-page/login-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    SignUpModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
