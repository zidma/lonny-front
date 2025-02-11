import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolLessonsComponent } from './school-lessons.component';

describe('SchoolLessonsComponent', () => {
  let component: SchoolLessonsComponent;
  let fixture: ComponentFixture<SchoolLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolLessonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
