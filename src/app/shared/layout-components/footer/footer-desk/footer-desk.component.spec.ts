import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDeskComponent } from './footer-desk.component';

describe('FooterDeskComponent', () => {
  let component: FooterDeskComponent;
  let fixture: ComponentFixture<FooterDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
