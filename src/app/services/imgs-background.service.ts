import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImgBackgroud } from '../intefaces/imgbackground.interface';

@Injectable({
  providedIn: 'root',
})
export class ImgsBackgroundService {
  private readonly _ImgSource = new BehaviorSubject<ImgBackgroud[]>([]);
  readonly ImgsBackground$ = this._ImgSource.asObservable();

  constructor() {
    const images: ImgBackgroud[] = [];
    Array(8)
      .fill(0)
      .forEach((e, i) => {
        const img: ImgBackgroud = {
          src: `assets/home_background_imgs/image ${i + 1}.jpeg`,
        };
        images.push(img);
      });
    this._setImg(images);
  }

  getImgs() {
    return this._ImgSource.getValue();
  }

  private _setImg(imgs: ImgBackgroud[]) {
    const images = [...this.getImgs(), ...imgs];
    this._ImgSource.next(images);
    return;
  }
}
