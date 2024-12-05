import { TestBed } from '@angular/core/testing';

import { MailControllerService } from './mail-controller.service';

describe('MailControllerService', () => {
  let service: MailControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
