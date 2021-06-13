export interface FormField {
  name: string;
  fieldType: string;
  fieldSubType?: string;
  label?: string;
  hint?: string;
  placeHolder?: string;
  defaultValue?: string;
  columnSize?: number;
  options?: FormFieldOption[];
  required?: boolean;
  context?: any;
  validations?: string[];
  min?: number;
  max?: number;
  step?: number;
  fieldArray?: FormField[];
}

export interface FormFieldOption {
  value: string;
  label?: string
}
