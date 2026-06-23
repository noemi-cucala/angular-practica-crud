import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsPage } from './cars.page';

describe('Cars', () => {
  let component: CarsPage;
  let fixture: ComponentFixture<CarsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
