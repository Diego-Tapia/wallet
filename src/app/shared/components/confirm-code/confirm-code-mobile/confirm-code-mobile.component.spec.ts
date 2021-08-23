import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCodeMobileComponent } from './confirm-code-mobile.component';

describe('ConfirmCodeMobileComponent', () => {
  let component: ConfirmCodeMobileComponent;
  let fixture: ComponentFixture<ConfirmCodeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCodeMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCodeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
