import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormField, FormFieldOption } from '../../models/form-models';

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

  get arrayControls(): FormArray {
    return this.form.controls[this.field.name] as FormArray;
  }

  isChecked(option: FormFieldOption): boolean {
    return this.arrayControls.value.indexOf(option.value) >= 0;
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value && this.arrayControls.value.indexOf(value) < 0) {
      this.arrayControls.push(new FormControl(value));
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.arrayControls.value.indexOf(tag);
    if (index >= 0) {
      this.arrayControls.removeAt(index);
    }
  }

  onCheckChange(event: any) {
    if(event.checked){
      if (this.arrayControls.value.indexOf(event.source.value) < 0) {
        this.arrayControls.push(new FormControl(event.source.value));
      }
    }
    else {
      const index = this.arrayControls.value.indexOf(event.source.value);
      if (index >= 0) {
        this.arrayControls.removeAt(index);
      }
    }
  }

}
