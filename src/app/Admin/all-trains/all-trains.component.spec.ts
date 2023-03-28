import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrainsComponent } from './all-trains.component';

describe('AllTrainsComponent', () => {
  let component: AllTrainsComponent;
  let fixture: ComponentFixture<AllTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
