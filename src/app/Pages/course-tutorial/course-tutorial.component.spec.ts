import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTutorialComponent } from './course-tutorial.component';

describe('CourseTutorialComponent', () => {
  let component: CourseTutorialComponent;
  let fixture: ComponentFixture<CourseTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseTutorialComponent]
    });
    fixture = TestBed.createComponent(CourseTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
