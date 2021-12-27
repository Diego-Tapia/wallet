import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciasModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: TransferenciasModalComponent;
  let fixture: ComponentFixture<TransferenciasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferenciasModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
