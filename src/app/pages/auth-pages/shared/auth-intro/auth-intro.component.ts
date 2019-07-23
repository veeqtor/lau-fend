import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'lau-auth-intro',
  templateUrl: './auth-intro.component.html',
  styleUrls: ['./auth-intro.component.scss'],
})
export class AuthIntroComponent implements OnInit {
  tween = new TimelineMax();

  ngOnInit(): void {
    this.animate();
  }

  animate(): void {
    this.tween.to('h1', 1.5, { x: '0', opacity: 1, ease: 'Bounce.easeOut' }, 0.5);
    this.tween.to('h1', 0.5, { opacity: 1, ease: 'Power1.easeOut' }, 1.5);

    this.tween.to('p', 1.5, { y: '0', opacity: 1, ease: 'Bounce.easeOut' }, 0.5);
    this.tween.to('p', 0.5, { opacity: 1, ease: 'Power1.easeOut' }, 1.5);
  }

  constructor() {
  }
}
