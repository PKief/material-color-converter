import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { materialColors } from './colors';
import { GithubCornerComponent } from './shared/github-corner/github-corner.component';
import { ToHslPipe } from './shared/pipes/to-hsl.pipe';
import { ToRgbPipe } from './shared/pipes/to-rgb.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      declarations: [AppComponent, ToHslPipe, ToRgbPipe, GithubCornerComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should select random color from the material color palette', async () => {
    expect(component.selectedColor).toBeDefined();
    expect(
      materialColors.some((c) => c.hex === component.selectedColor)
    ).toBeTrue();
  });

  it('should generate color palette correctly', () => {
    expect(component.colorPalette).toBeDefined();
    expect(component.colorPalette.length).toBeGreaterThan(0);
  });

  it('should store the color value in the input if the color picker has changed', () => {
    component.onChangeColorPicker({ srcElement: { value: '#eeeeee' } });
    expect(component.colorForm.value.color).toBe('#eeeeee');
  });

  it('should not convert color if form value is invalid', () => {
    component.colorForm.get('color').setValue('some invalid input');
    component.convert();
    expect(component.colorForm.invalid).toBeTrue();
  });
});
