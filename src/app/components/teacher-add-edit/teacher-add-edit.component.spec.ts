import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddEditComponent } from './teacher-add-edit.component';

describe('TeacherAddEditComponent', () => {
  let component: TeacherAddEditComponent;
  let fixture: ComponentFixture<TeacherAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
