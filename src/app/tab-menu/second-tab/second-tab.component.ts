import { Component, OnInit, Input } from '@angular/core';
import { SecondTabForm } from '../secondTabForm';

@Component({
  selector: 'second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.css']
})
export class SecondTabComponent implements OnInit {

  @Input()
  childForm: SecondTabForm;

  constructor() { }

  ngOnInit() {
  }

}
