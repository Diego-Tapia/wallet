import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovimientosComponent } from './card-movimientos.component';

describe('CardMovimientosComponent', () => {
  let component: CardMovimientosComponent;
  let fixture: ComponentFixture<CardMovimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMovimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
