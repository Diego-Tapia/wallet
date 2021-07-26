import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeskComponent } from './home-desk.component';

describe('HomeDeskComponent', () => {
  let component: HomeDeskComponent;
  let fixture: ComponentFixture<HomeDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
