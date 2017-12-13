import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPinsComponent } from './my-pins.component';

describe('MyPinsComponent', () => {
  let component: MyPinsComponent;
  let fixture: ComponentFixture<MyPinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
