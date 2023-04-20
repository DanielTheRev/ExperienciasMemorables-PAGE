import { Component, OnInit, inject } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper';
import { ServiciosService } from './services/servicios.service';
import { Service, ServiceData } from './interfaces/servicio.interface';

// install Swiper components
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
  services: ServiceData = {
    isEmpty: false,
    data: [],
  };
  serviceSelected: Service | null = null;
  private serviciosService = inject(ServiciosService);

  ngOnInit(): void {
    this.serviciosService.getServices().subscribe({
      next: (res) => {
        this.services = res;
      },
    });
  }

  setService(Service: Service) {
    if (Service.images.length > 0) {
      this.serviceSelected = Service;
    }
  }

  clearSelectedService() {
    this.serviceSelected = null;
  }
}
