import { Injectable } from '@angular/core';
import { TimelineMax } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class TweenService {

  constructor() { }
  tween = new TimelineMax();

  tweenate = (target: string, duration: number, vars: any, position?: any): void => {
    this.tween.to(target, duration, vars, position);
  }
}
