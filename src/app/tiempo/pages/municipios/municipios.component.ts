import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiempoService } from '../../services/tiempos.service';
import { switchMap } from 'rxjs/operators';
import { Tiempo } from '../../interfaces/tiempos.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css'],
})
export class MunicipiosComponent implements OnInit, OnDestroy {
  tiempo?: Tiempo;
  loading: boolean = true;
  error?: string;
  obs?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tiemposService: TiempoService
  ) {}
  
  ngOnDestroy(): void {
    this.obs?.unsubscribe;
  }

  ngOnInit(): void {
    this.loading = true;
    this.tiempo = undefined;
    this.obs = this.activatedRoute.params
      .pipe(
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
