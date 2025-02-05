import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAddEditComponent } from './question-add-edit.component';

describe('QuestionAddEditComponent', () => {
  let component: QuestionAddEditComponent;
  let fixture: ComponentFixture<QuestionAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
