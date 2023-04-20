import { Component, OnInit, inject } from '@angular/core';
import { ImgBG, ImgBgData } from '../../interfaces/imgbackground.interface';
import { ImgsBackgroundStoreService } from './store/imgs-background.store.service';

@Component({
  selector: 'app-img-background',
  templateUrl: './img-background.component.html',
  styleUrls: ['./img-background.component.scss'],
})
export class ImgBackgroundComponent implements OnInit {
  Images: ImgBgData = {
    data: [],
    isEmpty: false,
  };
  ImgsBackgroundService = inject(ImgsBackgroundStoreService);

  ngOnInit() {
    this.ImgsBackgroundService.ImgsBackground$.subscribe({
      next: (res) => {
        this.Images = res;
      },
    });
  }
}
