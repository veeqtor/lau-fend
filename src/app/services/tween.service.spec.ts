import { TestBed } from '@angular/core/testing';

import { TweenService } from './tween.service';

describe('TweenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TweenService = TestBed.get(TweenService);
    expect(service).toBeTruthy();
  });
});
