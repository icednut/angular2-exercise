/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyToolbarService } from './my-toolbar.service';

describe('Service: MyToolbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyToolbarService]
    });
  });

  it('should ...', inject([MyToolbarService], (service: MyToolbarService) => {
    expect(service).toBeTruthy();
  }));
});
