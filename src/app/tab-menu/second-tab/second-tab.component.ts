import { Component, OnInit, Input } from '@angular/core';
import { SecondTabForm } from '../secondTabForm';
import { FormService } from '../formService';

@Component({
  selector: 'second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.css']
})
export class SecondTabComponent implements OnInit {

  @Input()
  childForm: SecondTabForm = new SecondTabForm();

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.onSelectSecondForm(eventBody => {
      eventBody(this.childForm);
    });
  }

}
