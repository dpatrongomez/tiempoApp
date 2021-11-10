import { Component, OnInit, OnDestroy } from '@angular/core';
import { Provincia } from '../../interfaces/provincia.interface';
import { BuscadorService } from '../../services/buscador.service';
import { Municipio } from '../../interfaces/municipios.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit, OnDestroy {
  loading = false;
  buscando = false;
  error?: string;
  provincias?: Provincia[];
  municipios?: Municipio[];

  provinciaSeleccionada?: Provincia;
  municipioSeleccionado?: Municipio;

  obs?: Subscription;
  obs2?: Subscription;

  constructor(
    private buscadorService: BuscadorService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.obs?.unsubscribe;
    this.obs2?.unsubscribe;
  }

  ngOnInit(): void {
    this.loading = true;
    this.obs = this.buscadorService.getProvincias().subscribe(
      ({ provincias }) => {
        this.provincias = provincias;
        this.loading = false;
      },

      (err) => {
        if (err) {
          this.error = 'Existe un problema con el servidor, no se pudieron cargar las provincias';
          this.loading = false;
        }
      }
    );
  }

  seleccionar() {
    this.buscando = true;
    this.municipios = undefined;
    this.municipioSeleccionado = undefined;

    if (this.provinciaSeleccionada !== undefined) {
      this.obs2 = this.buscadorService
      .getMunicipiosDeProvincia(this.provinciaSeleccionada?.CODPROV)
      .subscribe(({ municipios }) => {
        this.municipios = municipios;
      });
    }
    this.buscando = false;
    }

  consultar() {
    if (this.municipioSeleccionado !== undefined) {
      this.router.navigate([
        '/municipios/',
        this.municipioSeleccionado.CODIGOINE.slice(0, 5),
      ]);
    }
  }
}
