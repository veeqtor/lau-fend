import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSvgComponent } from './bg-svg.component';

describe('BgSvgComponent', () => {
  let component: BgSvgComponent;
  let fixture: ComponentFixture<BgSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgSvgComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
