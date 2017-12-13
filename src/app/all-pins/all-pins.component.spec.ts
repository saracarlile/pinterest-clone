import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPinsComponent } from './all-pins.component';

describe('AllPinsComponent', () => {
  let component: AllPinsComponent;
  let fixture: ComponentFixture<AllPinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
