import { Component, OnInit, Input } from '@angular/core';
import { FirstTabForm } from '../firstTabForm';

@Component({
  selector: 'first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.css']
})
export class FirstTabComponent implements OnInit {

  @Input()
  childForm: FirstTabForm;

  constructor() { }

  ngOnInit() {
  }

}
