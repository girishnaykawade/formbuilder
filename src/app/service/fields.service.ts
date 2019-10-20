import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  inputTypesArray: any = [];
  selectedInput: any = [];
  constructor() {
    this.inputTypesArray = [
      {
        type: 'static',
        value: '',
        placeholder: 'Enter title'
      },
      {
        type: 'input',
        value: '',
        placeholder: 'Enter Text',
        maxLength: 100,
        maxLengthPlaceholder: 'Max Length'
      },
      {
        type: 'radio',
        value: '',
        placeholder: 'Enter Text',
        choice: ['choice1', 'choice2'],
      },
      {
        type: 'select',
        placeholder: 'Enter Text',
        options: ['option1', 'option2'],
      }
    ];
  }
}
