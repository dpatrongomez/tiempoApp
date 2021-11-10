import { TestBed } from '@angular/core/testing';
import { TiempoService } from './tiempos.service';
import { HttpClientModule } from '@angular/common/http';

describe('TiempoService', () => {
  let service: TiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
