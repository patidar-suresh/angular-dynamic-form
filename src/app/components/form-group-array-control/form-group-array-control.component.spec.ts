import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupArrayControlComponent } from './form-group-array-control.component';

describe('FormGroupArrayControlComponent', () => {
  let component: FormGroupArrayControlComponent;
  let fixture: ComponentFixture<FormGroupArrayControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupArrayControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupArrayControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
