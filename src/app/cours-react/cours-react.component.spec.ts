import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursReactComponent } from './cours-react.component';

describe('CoursReactComponent', () => {
  let component: CoursReactComponent;
  let fixture: ComponentFixture<CoursReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursReactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
