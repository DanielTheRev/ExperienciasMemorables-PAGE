import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Nosotros } from '../interfaces/nosotros.interface';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  private URI = `${environment.server_uri}/api/NosotrosPage`;
  private _http = inject(HttpClient);

  getNosotrosData() {
    return this._http.get<Nosotros>(`${this.URI}/getNosotrosData`);
  }
}