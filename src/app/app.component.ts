import { Component, OnInit } from '@angular/core';
import { MyToolbarService } from './my-toolbar.service';
import { FormService } from './tab-menu/formService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyToolbarService, FormService]
})
export class AppComponent {
  menuSubTitle;

  constructor(private myToolbarService: MyToolbarService) {
    this.myToolbarService.onChangeSubTitle(newMenuSubTitle => {
      this.menuSubTitle = newMenuSubTitle;
    });
  }

}
