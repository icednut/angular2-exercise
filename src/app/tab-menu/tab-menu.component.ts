import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MyToolbarService} from '../my-toolbar.service';

@Component({
  selector: 'tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  @Output()
  changeSubTitleEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private myToolbarService: MyToolbarService) { }

  ngOnInit() {
    this.myToolbarService.setSubTitle("tab-menu's subtitle");
  }

}
