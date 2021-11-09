import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

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

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-desktop',
        routerLink: ['']
      },
    ];
  }
}
