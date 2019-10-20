import { Component, OnInit } from '@angular/core';
import {FieldsService} from '../service/fields.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  inputTypesArray: any = [];
  selectedInputFieldsArray: any = [];

  constructor(private fieldsService: FieldsService) {
    this.inputTypesArray = fieldsService.inputTypesArray;
  }

  ngOnInit() {

  }

  setSelectedFields(index) {
    this.selectedInputFieldsArray.push(this.inputTypesArray[index]);
  }

  removeSelectedField(index) {
    this.selectedInputFieldsArray.splice(index, 1);
  }

  downloadJSON() {
    console.log(this.selectedInputFieldsArray);
  }

  moveSelectedField(direction, index) {
    if (direction === 'up' && index !== 0)  {
      const removedItem = this.selectedInputFieldsArray.splice(index, 1);
      this.selectedInputFieldsArray.splice(index - 1, 0, ...removedItem);
    } else if (direction === 'down' && index !== (this.selectedInputFieldsArray.length - 1)) {
      const removedItem = this.selectedInputFieldsArray.splice(index, 1);
      this.selectedInputFieldsArray.splice(index + 1, 0, ...removedItem);
    }
  }
}
