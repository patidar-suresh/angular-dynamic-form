import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormField } from '../../models/form-models';
import { DynamicFormBuilderService } from '../../services/dynamic-form-builder.service';

@Component({
  selector: 'app-form-group-array-control',
  templateUrl: './form-group-array-control.component.html',
  styleUrls: ['./form-group-array-control.component.scss']
})
export class FormGroupArrayControlComponent implements OnInit {

  @Input() field!: FormField;

  @Input() form!: FormGroup;

  constructor(private formBuilder: DynamicFormBuilderService) { }

  ngOnInit(): void {
  }

  get formGroupArrayControls(): FormArray {
    return this.form.controls[this.field.name] as FormArray;
  }

  getFormGroup(index:number) {
    return this.formGroupArrayControls.at(index) as FormGroup;
  }

  addNewFormGroup() {
    if (this.field.fieldArray) {
      const add = this.formGroupArrayControls;
      add.push(this.formBuilder.toFormGroup(this.field.fieldArray))
    }
  }

  deleteFormGroup(index: number) {
    const add = this.formGroupArrayControls;
    add.removeAt(index)
  }

}
