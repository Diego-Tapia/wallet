import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTokensMobileComponent } from './transfer-tokens-mobile.component';

describe('TransferTokensMobileComponent', () => {
  let component: TransferTokensMobileComponent;
  let fixture: ComponentFixture<TransferTokensMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferTokensMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferTokensMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
