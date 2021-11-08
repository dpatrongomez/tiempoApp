import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiempoService } from '../../services/tiempos.service';
import { switchMap } from 'rxjs/operators';
import { delay } from 'rxjs/internal/operators';
import { Tiempo, Hoy } from '../../interfaces/tiempos.interface';
import { Prevision } from '../../interfaces/prevision.interface';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css'],
})
export class MunicipiosComponent implements OnInit {
  tiempo!: Tiempo;
  loading: boolean = true;
  error!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tiemposService: TiempoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap((params) => this.tiemposService.getTiempoMunicipio(params.id))
      )

      .subscribe(
        (response) => {
          this.tiempo = response;
          this.loading = false;
        },
        (err) => {
          if (err.status === 500) {
            this.error = 'Código inválido';
          }
          this.loading = false;
        }
      );
  }
}
