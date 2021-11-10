import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MunicipioBuscador } from 'src/app/tiempo/interfaces/buscador.interface';
import { BuscadorService } from '../../tiempo/services/buscador.service';
import { Router } from '@angular/router';

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

  municipioSeleccionado?: MunicipioBuscador;

  filter(event: any) {
    let filtered: MunicipioBuscador[] = [];
    let query = event.query;
    for (let i = 0; i < this.municipios.length; i++) {
      let municipio = this.municipios[i];
      if (municipio.NOMBRE.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(municipio);
      }
    }
    this.municipiosFiltrados = filtered;
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

    this.buscadorService.getMunicipios().subscribe((municipios) => {
      this.municipios = municipios;
    });
  }
}
