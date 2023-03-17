import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
]);
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  services: { name: string; img: string; description: string }[] = [];

  ngOnInit(): void {
    this.services = [
      {
        name: 'Servicio de Catering',
        img: '',
        description: '',
      },
      {
        name: 'Organización integral del evento',
        img: '',
        description: '',
      },
      {
        name: 'Barra de tragos',
        img: '',
        description: '',
      },
      {
        name: 'Ambientación, sonido e iluminación',
        img: '',
        description: '',
      },
      {
        name: "Dj's",
        img: '',
        description: '',
      },
      {
        name: 'Actividades recreativas',
        img: '',
        description: '',
      },
      {
        name: 'Salones',
        img: '',
        description: '',
      },
      {
        name: 'Fotografía y video',
        img: '',
        description: '',
      },
      {
        name: 'Show',
        img: '',
        description: '',
      },
    ];
  }
}
