import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImgBG, ImgBgData } from '../../../interfaces/imgbackground.interface';
import { ImgBackgroundService } from '../services/img-background.service';

@Injectable({
  providedIn: 'root',
})
export class ImgsBackgroundStoreService {
  private readonly _ImgSource = new BehaviorSubject<ImgBgData>({
    data: [],
    isEmpty: true,
  });
  readonly ImgsBackground$ = this._ImgSource.asObservable();
  private imgBackgroundService = inject(ImgBackgroundService);

  constructor() {
    this.imgBackgroundService.getImages().subscribe({
      next: (res) => {
        this._setImg({ data: res.data, isEmpty: res.isEmpty });
      },
    });
  }

  getImgs() {
    return this._ImgSource.getValue();
  }

  private _setImg(data: ImgBgData) {
    // const images = [...this.getImgs().data];
    this._ImgSource.next(data);
    return;
  }
}
