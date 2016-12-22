import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MyToolbarService {

  subTitleChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setSubTitle(subTitle: string) {
    this.subTitleChangeEvent.emit(subTitle);
  }

  onChangeSubTitle(handler: any) {
    this.subTitleChangeEvent.subscribe(handler);
  }
}
