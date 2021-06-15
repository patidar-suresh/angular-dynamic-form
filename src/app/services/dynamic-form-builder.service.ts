import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../models/form-models';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormBuilderService {

  supportedFormArrayFields = ['chiplist', 'checkboxgroup', 'formgrouparray'];

  constructor(private fb: FormBuilder) { }

  toFormGroup(fields: FormField[]) {
    const group: any = {};

    fields.forEach(field => {
      if (field.fieldType === 'chiplist' || field.fieldType === 'checkboxgroup') {
        group[field.name] = this.fb.array([]);
      } else if (field.fieldType === 'formgrouparray' && field.fieldArray) {
        // Remove FormGroupArray type fields to avoid further nesting
        const fields = field.fieldArray.filter(item => item.fieldType != 'formgrouparray');
        group[field.name] = this.fb.array([this.toFormGroup(fields)]);
      } else {
        group[field.name] = [''];
      }
    });
    return this.fb.group(group);
  }

  clearForm(form: FormGroup, schema: FormField[]) {
    for (let field of schema) {
      if (this.supportedFormArrayFields.includes(field.fieldType)) {
        const frmArray = form.get(field.name) as FormArray
        frmArray.clear();
        if (field.fieldType === 'formgrouparray' && field.fieldArray) {
          const subFields = field.fieldArray.filter(item => item.fieldType != 'formgrouparray');
          form.setControl(field.name, this.fb.array([this.toFormGroup(subFields)]));
        } else {
          form.setControl(field.name, this.fb.array([]));
        }
      }
    }
    form.reset();
  }

  generageFormArrayForPatch(form: FormGroup, schema: FormField[], data: any) {
    for (let field of schema) {
      if (this.supportedFormArrayFields.includes(field.fieldType)) {
        const dataToPatch = data[field.name];
        if (dataToPatch && dataToPatch.length) {
          const frmArray = form.get(field.name) as FormArray
          frmArray.clear();
          if (field.fieldType === 'formgrouparray') {
            if (field.fieldArray) {
              for (let i = 0; i < dataToPatch.length; i++) {
                const formGroup = this.toFormGroup(field.fieldArray);
                this.generageFormArrayForPatch(formGroup, field.fieldArray, dataToPatch[i]);
                frmArray.push(formGroup)
              }
            }
          } else {
            this.generateFormArray(frmArray, field, dataToPatch);
          }
        }
      }
    }
  }

  private generateFormArray(formArray: FormArray, field: FormField, data: any) {
    for (let i = 0; i < data.length; i++) {
      formArray.push(this.fb.control(''));
    }
  }

}
