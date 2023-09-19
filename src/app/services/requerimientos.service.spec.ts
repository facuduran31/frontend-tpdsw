import { TestBed } from '@angular/core/testing';

import { RequerimientosService } from './requerimientos.service';

describe('RequerimientosService', () => {
  let service: RequerimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequerimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
