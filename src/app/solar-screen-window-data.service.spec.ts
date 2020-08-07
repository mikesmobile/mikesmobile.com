import { TestBed } from '@angular/core/testing';

import { SolarScreenWindowDataService } from './solar-screen-window-data.service';

describe('SolarScreenWindowDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolarScreenWindowDataService = TestBed.get(SolarScreenWindowDataService);
    expect(service).toBeTruthy();
  });
});
