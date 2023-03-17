import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  Photos: any[] = [];
  imgSelected: any = null;
  constructor() {
    Array(100)
      .fill(0)
      .forEach((e, i) => {
        const item = {
          isSelected: false,
          id: i + 1,
          imgRef: `https://picsum.photos/1920/1080/?random=${i}`,
        };
        this.Photos.push(item);
      });

    console.log(this.Photos);
  }

  setSelectedImg(id: number) {
    this.Photos = this.Photos.map((e) => {
      e.isSelected = false;
      return e;
    });
    this.Photos = this.Photos.map((e) => {
      if (e.id === id) {
        e.isSelected = true;
        this.imgSelected = e;
      }
      return e;
    });
  }
}
