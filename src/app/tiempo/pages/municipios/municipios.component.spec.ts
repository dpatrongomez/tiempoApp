import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { MunicipiosComponent } from './municipios.component';
import { TiempoService } from '../../services/tiempos.service';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
class FakeActivatedRoute {
  params: Observable<any> = of();
}

describe('MunicipiosComponent', () => {
  let component: MunicipiosComponent;
  let fixture: ComponentFixture<MunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MunicipiosComponent],
      providers: [
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
        TiempoService,
      ],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
