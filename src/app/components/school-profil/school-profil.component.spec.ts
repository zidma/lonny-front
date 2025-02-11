import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolProfilComponent } from './school-profil.component';

describe('SchoolProfilComponent', () => {
  let component: SchoolProfilComponent;
  let fixture: ComponentFixture<SchoolProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
