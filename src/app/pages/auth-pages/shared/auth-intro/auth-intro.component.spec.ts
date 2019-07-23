import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthIntroComponent } from './auth-intro.component';

describe('AuthIntroComponent', () => {
  let component: AuthIntroComponent;
  let fixture: ComponentFixture<AuthIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthIntroComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
