import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTokensDeskComponent } from './transfer-tokens-desk.component';

describe('TransferTokensDeskComponent', () => {
  let component: TransferTokensDeskComponent;
  let fixture: ComponentFixture<TransferTokensDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferTokensDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferTokensDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
