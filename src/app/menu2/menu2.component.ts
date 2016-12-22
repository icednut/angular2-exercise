import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MyToolbarService} from '../my-toolbar.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  @Output()
  changeSubTitleEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private myToolbarService: MyToolbarService) { }

  ngOnInit() {
    this.myToolbarService.setSubTitle("menu2's subtitle");
  }

}
