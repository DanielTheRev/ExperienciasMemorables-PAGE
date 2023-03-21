import { Component, OnInit } from '@angular/core';

interface Service {
  id?: string;
  name: string;
  img: string;
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

  setService(Service: Service) {
    this.serviceSelected = Service;
  }

  clearSelectedService() {
    this.serviceSelected = null;
  }
}
