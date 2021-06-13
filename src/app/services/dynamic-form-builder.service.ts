import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../models/form-models';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormBuilderService {

  constructor(private fb: FormBuilder) { }

  toFormGroup(fields: FormField[] ) {
    const group: any = {};

    fields.forEach(field => {
      if (field.fieldType === 'chiplist' || field.fieldType === 'checkboxgroup') {
        group[field.name] = this.fb.array([]);
      } else if(field.fieldType === 'formgrouparray' && field.fieldArray) {
        // Remove FormGroupArray type fields to avoid further nesting
        const fields = field.fieldArray.filter(item => item.fieldType != 'formgrouparray');
        group[field.name] = this.fb.array([this.toFormGroup(fields)]);
      } else {
        group[field.name] = [''];
      }
    });
    return this.fb.group(group);
  }
}
