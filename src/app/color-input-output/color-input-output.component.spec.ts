import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorInputOutputComponent } from './color-input-output.component';

describe('ColorInputOutputComponent', () => {
  let component: ColorInputOutputComponent;
  let fixture: ComponentFixture<ColorInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
