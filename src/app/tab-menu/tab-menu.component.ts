import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyToolbarService } from '../my-toolbar.service';
import { FirstTabForm } from './firstTabForm';
import { SecondTabForm } from './secondTabForm';

@Component({
  selector: 'tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  @Output()
  changeSubTitleEvent: EventEmitter<string> = new EventEmitter<string>();

  firstTabForm: FirstTabForm = new FirstTabForm();
  secondTabForm: SecondTabForm = new SecondTabForm();

  constructor(private myToolbarService: MyToolbarService) { }

  ngOnInit() {
    this.myToolbarService.setSubTitle("탭에서 모델 다루기 연습");
  }

  saveRequest() {
    console.log(`${this.firstTabForm.name} : ${this.firstTabForm.email} : ${this.firstTabForm.address}`);
    console.log(`${this.secondTabForm.count} : ${this.secondTabForm.groupName}`);
  }
}
