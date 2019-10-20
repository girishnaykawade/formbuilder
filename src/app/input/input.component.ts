import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {

  @Input() field: any;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.field);
  }

}
