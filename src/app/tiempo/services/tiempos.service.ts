import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tiempo } from '../interfaces/tiempos.interface';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  private _apiUrl: string  = 'https://api.el-tiempo.net/json/v3';

  constructor(private http: HttpClient) { }

  getTiempoMunicipio(id: string): Observable<Tiempo> {
    const municipioId = id.slice(0, 5);
    const provinceId = municipioId.slice(0, 2);
    const url = `${this._apiUrl}/provincias/${provinceId}/municipios/${municipioId}`;
    return this.http.get<Tiempo>(url);
  }
}
