import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class FormService {
  firstTabFormSelectEvent: EventEmitter<any> = new EventEmitter<any>();
  secondTabFormSelectEvent: EventEmitter<any> = new EventEmitter<any>();

  selectFirstForm(event: any) {
    this.firstTabFormSelectEvent.emit(event);
  }

  selectSecondForm(event: any) {
    this.secondTabFormSelectEvent.emit(event);
  }

  onSelectFirstForm(subscribeFunc: any) {
    this.firstTabFormSelectEvent.subscribe(subscribeFunc);
  }

  onSelectSecondForm(subscribeFunc: any) {
    this.secondTabFormSelectEvent.subscribe(subscribeFunc);
  }
}