import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { GithubCornerComponent } from './shared/github-corner/github-corner.component';
import { ToHslPipe } from './shared/pipes/to-hsl.pipe';
import { ToRgbPipe } from './shared/pipes/to-rgb.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  jest.mock('./colors', () => [{ category: 'red', hue: '50', hex: '#FFEBEE' }]);

  beforeEach(async () => {
    const mockActivatedRoute = {
      queryParams: of({
        color: 'red',
      }),
    };
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [AppComponent, ToHslPipe, ToRgbPipe, GithubCornerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          use: mockActivatedRoute,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
