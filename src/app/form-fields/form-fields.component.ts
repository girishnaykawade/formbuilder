import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload;
  uploadedJSON: any = [];
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index: any) {
      return index;
  }

    // To open file upload modal
    triggers() {
        this.fileUpload.nativeElement.click('none');
    }

    fileChangeListener(event: any) {
        const file: File = event.target.files[0];
        if (file.type.includes('application/json')) {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = (events: any) => {
                if (JSON.parse(events.target.result)) {
                    this.uploadedJSON = JSON.parse(events.target.result);
                    console.log(this.uploadedJSON);
                }
            };
        }
        event.target.value = '';
    }

}
