import { TestBed } from '@angular/core/testing';

import { TiempoService } from './tiempos.service';

describe('TiempoService', () => {
  let service: TiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
