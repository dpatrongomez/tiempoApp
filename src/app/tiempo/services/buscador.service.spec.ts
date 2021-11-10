import { TestBed } from '@angular/core/testing';

import { BuscadorService } from './buscador.service';
import { HttpClientModule } from '@angular/common/http';

describe('BuscadorService', () => {
  let service: BuscadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [HttpClientModule],
    });
    service = TestBed.inject(BuscadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
