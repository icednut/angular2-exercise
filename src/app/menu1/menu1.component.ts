import {Output, Component, OnInit, EventEmitter} from '@angular/core';
import {MyToolbarService} from '../my-toolbar.service';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {

  @Output()
  changeSubTitleEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private myToolbarService: MyToolbarService) { }

  ngOnInit() {
    this.myToolbarService.setSubTitle("menu1's subtitle");
  }

}
