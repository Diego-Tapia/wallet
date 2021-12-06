import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivosComponent } from './card-activos.component';

describe('CardActivosComponent', () => {
  let component: CardActivosComponent;
  let fixture: ComponentFixture<CardActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
