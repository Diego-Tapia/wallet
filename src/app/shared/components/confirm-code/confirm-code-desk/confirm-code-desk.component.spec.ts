import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCodeDeskComponent } from './confirm-code-desk.component';

describe('ConfirmCodeDeskComponent', () => {
  let component: ConfirmCodeDeskComponent;
  let fixture: ComponentFixture<ConfirmCodeDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCodeDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCodeDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
