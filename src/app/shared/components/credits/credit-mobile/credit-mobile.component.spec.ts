import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMobileComponent } from './credit-mobile.component';

describe('CreditMobileComponent', () => {
  let component: CreditMobileComponent;
  let fixture: ComponentFixture<CreditMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
