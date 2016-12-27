import { Component, OnInit, Input } from '@angular/core';
import { FirstTabForm } from '../firstTabForm';
import { FormService } from '../formService';

@Component({
  selector: 'first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.css']
})
export class FirstTabComponent implements OnInit {

  @Input()
  childForm: FirstTabForm = new FirstTabForm();

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.onSelectFirstForm(eventBody => {
      eventBody(this.childForm);
    });
  }

}
