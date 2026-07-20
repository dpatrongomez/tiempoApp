import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EndpointProvincias } from '../interfaces/provincia.interface';
import { EndpointMunicipios } from '../interfaces/municipios.interface';
import { MunicipioBuscador } from '../interfaces/buscador.interface';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  private _apiUrl: string  = 'https://api.el-tiempo.net/json/v3';

  constructor(private http: HttpClient) { }

  getProvincias(): Observable<EndpointProvincias> {
    const url: string = `${this._apiUrl}/provincias`
    return this.http.get<EndpointProvincias>(url);
  }

  getMunicipiosDeProvincia(id: string): Observable<EndpointMunicipios> {
    const url: string = `${this._apiUrl}/provincias/${id}/municipios`
    return this.http.get<EndpointMunicipios>(url);
  }

  getMunicipios(): Observable<MunicipioBuscador[]> {
    return this.getProvincias().pipe(
      switchMap(({ provincias }) =>
        forkJoin(
          provincias.map((provincia) =>
            this.getMunicipiosDeProvincia(provincia.CODPROV)
          )
        ).pipe(
          map((respuestas) =>
            respuestas.reduce(
              (municipios, respuesta) => municipios.concat(respuesta.municipios),
              [] as MunicipioBuscador[]
            )
          )
        )
      )
    );
  }
}
