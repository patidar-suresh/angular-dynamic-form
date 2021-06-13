import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormField, FormFieldOption } from 'src/app/models/form-models';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @Input() field!: FormField;

  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.field.name].valid; }

  supportedFormFieldTypes: string[] = ['textbox', 'textarea', 'dropdown','chiplist']

  constructor() { }

  ngOnInit(): void {
  }

  get tagControls(): FormArray {
    return this.form.controls[this.field.name] as FormArray;
  }

  isChecked(option: FormFieldOption): boolean {
    return this.form.controls[this.field.name].value.indexOf(option.value) >= 0;
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value && this.tagControls.value.indexOf(value) < 0) {
      this.tagControls.push(new FormControl(value));
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.tagControls.value.indexOf(tag);
    if (index >= 0) {
      this.tagControls.removeAt(index);
    }
  }

  onCheckChange(event: any) {
    const formArray: FormArray = this.form.get(this.field.name) as FormArray;

    if(event.checked){
      if (this.tagControls.value.indexOf(event.source.value) < 0) {
        formArray.push(new FormControl(event.source.value));
      }
    }
    else {
      const index = this.tagControls.value.indexOf(event.source.value);
      if (index >= 0) {
        this.tagControls.removeAt(index);
      }
    }
  }

}
