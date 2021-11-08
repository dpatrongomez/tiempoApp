import { Component, Input, OnInit } from '@angular/core';
import { Prevision } from 'src/app/tiempo/interfaces/prevision.interface';
import { Hoy, Tiempo } from '../../../../interfaces/tiempos.interface';

@Component({
  selector: 'app-prevision',
  templateUrl: './prevision.component.html',
  styleUrls: ['./prevision.component.css']
})
export class PrevisionComponent implements OnInit {

  @Input() tiempo!: Tiempo;
  fechaActual!: Date;


  constructor() { }

  ngOnInit(): void {
    this.fechaActual = new Date();
  }


  getPrevision(): Prevision[] {
    const hoy = this.tiempo.pronostico.hoy;
    const manana = this.tiempo.pronostico.manana;

    return Array.prototype.concat(
      this.devolverPrevision(hoy),
      this.devolverPrevision(manana)
    );
  }

  devolverPrevision(dia: Hoy) {
    let prevision: Prevision[] = [];
    let fecha = new Date(dia['@attributes'].fecha);
    let isTomorrow = fecha.getDate() !== this.fechaActual.getDate();

    for (let _i = 0; _i < dia.temperatura.length; _i++) {
      if (isTomorrow || this.checkHour(dia.viento[_i]['@attributes'].periodo)) {
        prevision.push({
          hora: dia.viento[_i]['@attributes'].periodo + ':00',
          estado_cielo: dia.estado_cielo[_i],
          temperatura: dia.temperatura[_i] + '°C',
          precipitacion: dia.precipitacion[_i] + '%',
          viento: dia.viento[_i].velocidad + 'km/h',
        });
      }
    }

    return prevision;
  }

  checkHour(hora: string): boolean {
    return parseInt(hora) > this.fechaActual.getHours() ? true : false;
  }

}
