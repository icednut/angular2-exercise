import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyToolbarService } from '../my-toolbar.service';
import { FirstTabForm } from './firstTabForm';
import { SecondTabForm } from './secondTabForm';
import { FormService } from './formService';

@Component({
  selector: 'tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  @Output()
  changeSubTitleEvent: EventEmitter<string> = new EventEmitter<string>();

  firstTabForm: FirstTabForm;
  secondTabForm: SecondTabForm;

  constructor(
    private myToolbarService: MyToolbarService,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.myToolbarService.setSubTitle("탭에서 모델 다루기 연습");
  }

  saveRequest() {
    this.formService.selectFirstForm(it => {
      this.firstTabForm = it;
      console.log(`${this.firstTabForm.name} : ${this.firstTabForm.email} : ${this.firstTabForm.address}`);
    });
    this.formService.selectSecondForm(it => {
      this.secondTabForm = it;
      console.log(`${this.secondTabForm.count} : ${this.secondTabForm.groupName}`);
    });
  }
}
