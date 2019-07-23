import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { BgSvgComponent } from './bg-svg/bg-svg.component';
import { AuthIntroComponent } from './auth-intro/auth-intro.component';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';

@NgModule({
  declarations: [
    BgSvgComponent,
    LogoComponent,
    AuthIntroComponent,
    SocialButtonsComponent,
  ],

  exports: [
    BgSvgComponent,
    LogoComponent,
    AuthIntroComponent,
    SocialButtonsComponent,
    FontAwesomeModule,
  ],

  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
})

export class AuthSharedModule {
  constructor() {
    library.add(
      faFacebook,
      faTwitter,
      faGoogle,
      faChevronCircleLeft,
    );
  }
}
