import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEditComponent } from './school-edit.component';

describe('SchoolEditComponent', () => {
  let component: SchoolEditComponent;
  let fixture: ComponentFixture<SchoolEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
