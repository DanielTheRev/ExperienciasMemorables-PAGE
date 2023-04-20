import { Component, OnInit, inject } from '@angular/core';
import { NosotrosService } from './services/nosotros.service';
import { Nosotros } from './interfaces/nosotros.interface';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent implements OnInit {
  private nosotrosService = inject(NosotrosService);
  NosotrosData: Nosotros | null = null;

  ngOnInit(): void {
    this.nosotrosService.getNosotrosData().subscribe({
      next: (res) => {
        this.NosotrosData = res;
      },
    });
  }
}
