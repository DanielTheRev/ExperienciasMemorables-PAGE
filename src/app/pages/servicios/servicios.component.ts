import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
]);
interface Service {
  id?: string;
  name: string;
  img: any[];
  description: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  services: Service[] = [];
  serviceSelected: Service | null = null;

  ngOnInit(): void {
    this.services = [
      {
        name: 'Catering',
        img: [
          {
            src: 'service_background/Catering/image 1.jpeg',
          },
          {
            src: 'service_background/Catering/image 2.jpeg',
          },
          {
            src: 'service_background/Catering/image 3.jpeg',
          },
          {
            src: 'service_background/Catering/image 4.jpeg',
          },
          {
            src: 'service_background/Catering/image 5.jpeg',
          },
          {
            src: 'service_background/Catering/image 6.jpeg',
          },
        ],
        description: '',
      },
      {
        name: 'Planificación',
        img: [],
        description: '',
      },
      {
        name: 'Barra de tragos',
        img: [],
        description: '',
      },
      {
        name: 'Ambientación, sonido e iluminación',
        img: [
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 1.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 2.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 3.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 4.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 5.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 6.jpeg',
          },
        ],
        description: '',
      },
      {
        name: "Dj's",
        img: [
          {
            src: "service_background/Dj's/image 1.jpeg",
          },
        ],
        description: '',
      },
      {
        name: 'Actividades recreativas',
        img: [],
        description: '',
      },
      {
        name: 'Espacio exterior',
        img: [
          {
            src: 'service_background/Espacio exterior/image 1.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 2.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 3.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 4.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 5.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 6.jpeg',
          },
        ],
        description: '',
      },
      {
        name: 'Fotografía y video',
        img: [],
        description: '',
      },
      {
        name: 'Show',
        img: [],
        description: '',
      },
      {
        name: 'Tematicas',
        img: [],
        description: '',
      },
    ];
  }

  setService(Service: Service) {
    if (Service.img.length > 0) {
      this.serviceSelected = Service;
    }
  }

  clearSelectedService() {
    this.serviceSelected = null;
  }
}
