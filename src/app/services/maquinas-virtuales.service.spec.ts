import { TestBed } from '@angular/core/testing';

import { MaquinasVirtualesService } from './maquinas-virtuales.service';

describe('MaquinasVirtualesService', () => {
  let service: MaquinasVirtualesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinasVirtualesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
