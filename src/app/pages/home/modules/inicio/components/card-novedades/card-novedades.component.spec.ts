import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNovedadesComponent } from './card-novedades.component';

describe('CardNovedadesComponent', () => {
  let component: CardNovedadesComponent;
  let fixture: ComponentFixture<CardNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
