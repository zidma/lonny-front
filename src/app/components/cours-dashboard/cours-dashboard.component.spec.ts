import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursDashboardComponent } from './cours-dashboard.component';

describe('CoursDashboardComponent', () => {
  let component: CoursDashboardComponent;
  let fixture: ComponentFixture<CoursDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
