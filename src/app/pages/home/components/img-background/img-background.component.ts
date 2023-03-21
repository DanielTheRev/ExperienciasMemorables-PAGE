import { Component } from '@angular/core';
import { ImgBackgroud } from '../../intefaces/imgbackground.interface';
import { ImgsBackgroundService } from '../../services/imgs-background.service';

@Component({
  selector: 'app-img-background',
  templateUrl: './img-background.component.html',
  styleUrls: ['./img-background.component.scss'],
})
export class ImgBackgroundComponent {
  Images: ImgBackgroud[] = [];

  constructor(private ImgsBackgroundService: ImgsBackgroundService) {
    this.ImgsBackgroundService.ImgsBackground$.subscribe({
      next: (res) => {
        this.Images = res;
      },
    });
  }
}
