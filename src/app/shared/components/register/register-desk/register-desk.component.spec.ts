import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeskComponent } from './register-desk.component';

describe('RegisterDeskComponent', () => {
  let component: RegisterDeskComponent;
  let fixture: ComponentFixture<RegisterDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
