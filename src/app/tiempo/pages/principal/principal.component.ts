import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Provincia } from '../../interfaces/provincia.interface';
import { BuscadorService } from '../../services/buscador.service';
import { Municipio } from '../../interfaces/municipios.interface';
import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  loading = false;
  buscando = false;
  error?: string;
  provincias?: Provincia[];
  municipios?: Municipio[];

  provinciaSeleccionada?: Provincia;
  municipioSeleccionado?: Municipio;

  constructor(
    private buscadorService: BuscadorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.buscadorService.getProvincias().subscribe(
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
      this.buscadorService
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
