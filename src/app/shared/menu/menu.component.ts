import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MunicipioBuscador } from 'src/app/tiempo/interfaces/buscador.interface';
import { BuscadorService } from '../../tiempo/services/buscador.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      #search-icon {
        padding-left: 5px;
      }
    `,
  ],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  hayError: boolean = false;
  municipios: MunicipioBuscador[] = [];
  municipiosFiltrados: MunicipioBuscador[] = [];
  cargandoMunicipios = false;
  municipiosCargados = false;
  ultimaQuery = '';

  municipioSeleccionado?: MunicipioBuscador;
  private municipiosObs?: Subscription;

  filter(event: any) {
    const query = (event.query || '').trim();
    this.ultimaQuery = query;

    if (!this.municipiosCargados) {
      this.cargarMunicipios();
      return;
    }

    this.municipiosFiltrados = this.filtrarMunicipios(query);
  }

  buscar(municipio: MunicipioBuscador) {
    if(municipio !== null) {
      this.municipioSeleccionado = undefined;
      this.router.navigate([
        '/municipios/',
        municipio.CODIGOINE.slice(0, 5),
      ]);
    }
  }

  constructor(private buscadorService: BuscadorService,
              private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-desktop',
        routerLink: [''],
      },
    ];
  }

  ngOnDestroy(): void {
    this.municipiosObs?.unsubscribe();
  }

  private cargarMunicipios(): void {
    if (this.cargandoMunicipios) {
      return;
    }

    this.cargandoMunicipios = true;
    this.municipiosObs = this.buscadorService.getMunicipios().subscribe({
      next: (municipios) => {
        this.municipios = municipios;
        this.municipiosCargados = true;
        this.municipiosFiltrados = this.filtrarMunicipios(this.ultimaQuery);
      },
      error: () => {
        this.hayError = true;
      },
      complete: () => {
        this.cargandoMunicipios = false;
      },
    });
  }

  private filtrarMunicipios(query: string): MunicipioBuscador[] {
    if (!query) {
      return [];
    }

    return this.municipios.filter((municipio) =>
      municipio.NOMBRE.toLowerCase().indexOf(query.toLowerCase()) === 0
    );
  }
}
