import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormField } from '../models/form-models';
import { DynamicFormBuilderService } from '../services/dynamic-form-builder.service';
import sample from './sample-schemas';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  data: any = {}
  schema: FormField[] = sample.schemas['product'];

  selectedTabIndex = 0;
  formGroup: FormGroup;

  constructor(private fb: DynamicFormBuilderService) {
    this.formGroup = this.fb.toFormGroup(this.schema);
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.index === 2) {
      this.data = this.formGroup.value;
    }
  }

  onFormChange(event: MatSelectChange) {
    switch (event.value) {
      case 'product':
        this.schema = sample.schemas.product;
        break;
      case 'employee':
        this.schema = sample.schemas.employee;
        break;
      case 'assessment':
        this.schema = sample.schemas.assessment;
        break;
      default:
        this.schema = sample.schemas.product;
    }
    this.formGroup = this.fb.toFormGroup(this.schema);
    this.selectedTabIndex = 0;
  }

  ngOnInit(): void {
  }

}
