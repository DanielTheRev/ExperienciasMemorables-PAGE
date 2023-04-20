import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Contacto } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private URI = `${environment.server_uri}/api/ContactMessages`;
  private _http = inject(HttpClient);

  sendMessage(data: Contacto) {
    return this._http.post<{ success: boolean; message: string }>(
      `${this.URI}/sendMessage`,
      data
    );
  }
}
