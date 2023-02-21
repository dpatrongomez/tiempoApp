import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tiempo } from '../interfaces/tiempos.interface';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  private _apiUrl: string  = 'https://www.el-tiempo.net/api/json/v2';

  constructor(private http: HttpClient) { }

  getTiempoMunicipio(id: string): Observable<Tiempo> {
    const provinceId = id.slice(0, 2)
    const url = `${this._apiUrl}/provincias/${provinceId}/municipios/${id}`;
    return this.http.get<Tiempo>(url);
  }
}
