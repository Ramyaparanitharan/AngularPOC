import { TestBed } from '@angular/core/testing';

import { Connectservice } from './connectservice';

describe('Connectservice', () => {
  let service: Connectservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Connectservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
