import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ImgBG } from '../../../interfaces/imgbackground.interface';

@Injectable({
  providedIn: 'root',
})
export class ImgBackgroundService {
  private readonly URI = `${environment.server_uri}/api/imgBackground`;
  private _http = inject(HttpClient);

  getImages() {
    return this._http.get<{
      success: boolean;
      data: ImgBG[];
      isEmpty: boolean;
    }>(`${this.URI}/getImagesBackground`);
  }
}
