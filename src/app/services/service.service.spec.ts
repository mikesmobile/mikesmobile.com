import { TestBed, inject } from '@angular/core/testing';

import { MailService } from './mail.service';
import { SEOService } from './seo.service';

describe('MailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailService]
    });
  });

  it('should be created', inject([MailService], (service: MailService) => {
    expect(service).toBeTruthy();
  }));
});

describe('SEOSErvice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SEOService]
    });
  });

  it('should be created', inject([SEOService], (service: SEOService) => {
    expect(service).toBeTruthy();
  }));
});
