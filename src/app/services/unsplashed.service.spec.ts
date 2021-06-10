import { TestBed } from '@angular/core/testing';

import { UnsplashedService } from './unsplashed.service';

describe('UnsplashedService', () => {
  let service: UnsplashedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
