import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointProvincias } from '../interfaces/provincia.interface';
import { EndpointMunicipios } from '../interfaces/municipios.interface';
import { MunicipioBuscador } from '../interfaces/buscador.interface';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  private _apiUrl: string  = 'https://www.el-tiempo.net/api/json/v2';

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
    const url: string = `${this._apiUrl}/municipios`
    return this.http.get<MunicipioBuscador[]>(url);
  }
}
