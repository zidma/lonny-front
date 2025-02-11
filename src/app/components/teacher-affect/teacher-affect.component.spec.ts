import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAffectComponent } from './teacher-affect.component';

describe('TeacherAffectComponent', () => {
  let component: TeacherAffectComponent;
  let fixture: ComponentFixture<TeacherAffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherAffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
