import {Input, Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {

  @Input()
  currentMenuSubTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
