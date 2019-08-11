import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'lau-auth-intro',
  templateUrl: './auth-intro.component.html',
  styleUrls: ['./auth-intro.component.scss'],
})
export class AuthIntroComponent implements OnInit {
  constructor() {
  }
  tween = new TimelineMax();

  ngOnInit(): void {
    this.animate();
  }

  animate(): void {
    this.tween.to('h1, p', 1.5, { opacity: 1, ease: 'Power1.easeOut' }, 0.5);
  }


}
