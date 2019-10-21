import {Component, OnInit} from '@angular/core';
import {FieldsService} from '../service/fields.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    inputTypesArray: any = [];
    selectedInputFieldsArray: any = [];

    constructor(private fieldsService: FieldsService) {
        this.inputTypesArray = fieldsService.inputTypesArray;
    }

    /**
     * To save selected input field in array
     * @param index
     */
    setSelectedFields(index) {
        if (index) {
            this.selectedInputFieldsArray.push(this.inputTypesArray[index]);
        }
    }

    /**
     *  To remove clicked index from selected array
     * @param index
     */
    removeSelectedField(index) {
        if (index) {
            this.selectedInputFieldsArray.splice(index, 1);
        }
    }

    /**
     * To download the JSON of selected input fields
     */
    downloadJSON() {
        if (this.selectedInputFieldsArray && this.selectedInputFieldsArray.length) {
            const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.selectedInputFieldsArray));
            const dlAnchorElem = document.getElementById('download-json');
            dlAnchorElem.setAttribute('href', dataStr);
            dlAnchorElem.setAttribute('download', 'form_builder.json');
            dlAnchorElem.click();
        }
    }

    /**
     * To move the position of clicked element
     * @param direction
     * @param index
     */
    moveSelectedField(direction, index) {
        if (direction === 'up' && index !== 0) {
            const splicedItem = this.selectedInputFieldsArray.splice(index, 1);
            this.selectedInputFieldsArray.splice(index - 1, 0, ...splicedItem);
        } else if (direction === 'down' && index !== (this.selectedInputFieldsArray.length - 1)) {
            const splicedItem = this.selectedInputFieldsArray.splice(index, 1);
            this.selectedInputFieldsArray.splice(index + 1, 0, ...splicedItem);
        }
    }
}
