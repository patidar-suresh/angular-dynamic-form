import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DynamicFormBuilderService } from '../services/dynamic-form-builder.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  schema1 = [{
    "name": "firstName",
    "fieldType": "textbox",
    "label": "First Name",
    "hint": "Enter as per your official records",
    "placeHolder": "First Name",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "middleName",
    "fieldType": "textbox",
    "label": "Middle Name",
    "hint": "Enter as per your official records",
    "placeHolder": "Middle Name",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "lastName",
    "fieldType": "textbox",
    "label": "Last Name",
    "hint": "Enter as per your official records",
    "placeHolder": "Last Name",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "date",
    "fieldType": "textbox",
    "fieldSubType": "date",
    "label": "Date of Birth",
    "hint": "Enter as per your official records",
    "placeHolder": "...",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "gender",
    "fieldType": "radiogroup",
    "label": "Gender",
    "placeHolder": "Gender",
    "defaultValue": "",
    "columnSize": 4,
    "options": [
      { "label": "Male", "value": "m" },
      { "label": "Female", "value": "f" },
      { "label": "Transgender", "value": "t"}
    ],
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "relocation",
    "fieldType": "radiogroup",
    "label": "Ready to Relocate",
    "defaultValue": "",
    "columnSize": 4,
    "options": [
      { "label": "Yes", "value": "y" },
      { "label": "No", "value": "n" }
    ],
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "hobbies",
    "fieldType": "checkboxgroup",
    "label": "Hobbies",
    "placeHolder": "Hobbies",
    "defaultValue": "",
    "columnSize": 4,
    "options": [
      { "label": "Music", "value": "Music" },
      { "label": "Dance", "value": "Dance" },
      { "label": "Travelling", "value": "Travelling"},
      { "label": "Horse Ridding", "value": "Horse Ridding"},
      { "label": "Car Driving", "value": "Car Driving"}
    ],
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "city",
    "fieldType": "dropdown",
    "label": "Current City",
    "hint": "Select the city you are currently living in",
    "placeHolder": "City",
    "defaultValue": "",
    "columnSize": 4,
    "options": [
      { "label": "Pune", "value": "pune" },
      { "label": "Mumbai", "value": "mumbai" },
      { "label": "Bangalore", "value": "blr"}
    ],
    "required": true,
    "context": {"stayType": "CurrentLocation"}
  },
  {
    "name": "State",
    "fieldType": "dropdown",
    "label": "Current State",
    "hint": "Select the state you are currently living in",
    "placeHolder": "State",
    "defaultValue": "",
    "columnSize": 4,
    "options": [
      { "label": "Maharashtra", "value": "mh" },
      { "label": "Karnataka", "value": "ka" },
      { "label": "Madhya Pradesh", "value": "mp"}
    ],
    "required": true,
    "context": {"stayType": "currentState"}
  },
  {
    "name": "comment",
    "fieldType": "textarea",
    "label": "Comment",
    "hint": "Enter as per your official records",
    "placeHolder": "Brief comment",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "Confidence",
    "fieldType": "slider",
    "label": "Confidence Level",
    "hint": "Enter as per your official records",
    "placeHolder": "Brief comment",
    "defaultValue": "",
    "columnSize": 4,
    "min": 0,
    "max": 100,
    "step": 5,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "hostList",
    "fieldType": "chiplist",
    "label": "Host Name Contains",
    "placeHolder": "Host Name",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  }
]
  data = {}

  schema = [{
    "name": "firstName",
    "fieldType": "textbox",
    "label": "First Name",
    "hint": "Enter as per your official records",
    "placeHolder": "First Name",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "lastName",
    "fieldType": "textbox",
    "label": "Last Name",
    "hint": "Enter as per your official records",
    "placeHolder": "Last Name",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "hostList",
    "fieldType": "chiplist",
    "label": "Host Name Contains",
    "placeHolder": "Host Name",
    "defaultValue": "",
    "columnSize": 4,
    "required": true,
    "context": {"type": "official"}
  },
  {
    "name": "hobbies",
    "fieldType": "formgrouparray",
    "label": "Your Hobbies",
    "hint": "Enter as per your official records",
    "columnSize": 12,
    "required": true,
    "context": {"type": "official"},
    "fieldArray": [
      {
        "name": "firstname",
        "fieldType": "textbox",
        "label": "First Name",
        "hint": "Enter as per your official records",
        "placeHolder": "First Name",
        "defaultValue": "",
        "columnSize": 4,
        "required": true,
        "context": {"type": "official"}
      },
      {
        "name": "lastName",
        "fieldType": "textbox",
        "label": "Last Name",
        "hint": "Enter as per your official records",
        "placeHolder": "Last Name",
        "defaultValue": "",
        "columnSize": 4,
        "required": true,
        "context": {"type": "official"}
      },
      {
        "name": "hobbies",
        "fieldType": "checkboxgroup",
        "label": "Hobbies",
        "placeHolder": "Hobbies",
        "defaultValue": "",
        "columnSize": 3,
        "options": [
          { "label": "Music", "value": "Music" },
          { "label": "Dance", "value": "Dance" }
        ],
        "required": true,
        "context": {"type": "official"}
      },
    ]
  },
]

  formGroup: FormGroup;

  constructor(private fb: DynamicFormBuilderService) {
    this.formGroup = this.fb.toFormGroup(this.schema);
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.index === 2) {
      this.data = this.formGroup.value;
    }
  }

  ngOnInit(): void {
  }

}
