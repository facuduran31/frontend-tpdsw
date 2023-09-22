import { TestBed } from '@angular/core/testing';

import { ComputadorasService } from './computadoras.service';

describe('ComputadorasService', () => {
  let service: ComputadorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputadorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
