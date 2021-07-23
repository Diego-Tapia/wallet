import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDeskComponent } from './credit-desk.component';

describe('CreditDeskComponent', () => {
  let component: CreditDeskComponent;
  let fixture: ComponentFixture<CreditDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
