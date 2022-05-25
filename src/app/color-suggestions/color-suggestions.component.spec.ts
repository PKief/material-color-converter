import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSuggestionsComponent } from './color-suggestions.component';

describe('ColorSuggestionsComponent', () => {
  let component: ColorSuggestionsComponent;
  let fixture: ComponentFixture<ColorSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
