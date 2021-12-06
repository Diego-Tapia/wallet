import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActivosComponent } from './detalle-activos.component';

describe('DetalleActivosComponent', () => {
  let component: DetalleActivosComponent;
  let fixture: ComponentFixture<DetalleActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
