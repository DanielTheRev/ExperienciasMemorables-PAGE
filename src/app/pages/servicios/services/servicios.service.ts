import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceData } from '../interfaces/servicio.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private API_URL = `${environment.server_uri}/api/services`;
  private _http = inject(HttpClient);

  getServices() {
    return this._http.get<ServiceData>(`${this.API_URL}/getServices`);
  }
}
