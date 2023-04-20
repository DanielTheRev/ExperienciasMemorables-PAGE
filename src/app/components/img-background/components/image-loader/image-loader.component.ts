import { Component, Input } from '@angular/core';
import { ImgBG } from 'src/app/interfaces/imgbackground.interface';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss'],
})
export class ImageLoaderComponent {
  @Input('img') img!: ImgBG;

  imageState(ev: any, id: string) {
    const image = document.getElementById(id);

    image ? (image.style.display = 'block') : '';
  }
}
