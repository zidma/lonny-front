import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursEditComponent } from './cours-edit.component';

describe('CoursEditComponent', () => {
  let component: CoursEditComponent;
  let fixture: ComponentFixture<CoursEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
