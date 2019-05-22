import { TestBed, inject } from '@angular/core/testing';

import { MailService } from './mail.service';

describe('ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailService]
    });
  });

  it('should be created', inject([MailService], (service: MailService) => {
    expect(service).toBeTruthy();
  }));
});
