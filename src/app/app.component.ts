import { Component, OnInit } from '@angular/core';
import {MyToolbarService} from './my-toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyToolbarService]
})
export class AppComponent {
  menuSubTitle;

  constructor(private myToolbarService: MyToolbarService) {
    this.myToolbarService.onChangeSubTitle(newMenuSubTitle => {
      this.menuSubTitle = newMenuSubTitle;
    });
  }

}
