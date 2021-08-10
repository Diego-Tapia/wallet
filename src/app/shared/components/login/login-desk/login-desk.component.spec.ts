import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDeskComponent } from './login-desk.component';

describe('LoginDeskComponent', () => {
  let component: LoginDeskComponent;
  let fixture: ComponentFixture<LoginDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
