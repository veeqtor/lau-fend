import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpModule } from './pages/auth-pages/sign-up/sign-up.module';
import { LoginPageModule } from './pages/auth-pages/login-page/login-page.module';
import { ErrorComponent } from './pages/error/error.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarOverlayDirective } from './directives/sidebar-overlay.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DashboardComponent,
    SidebarOverlayDirective,
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
