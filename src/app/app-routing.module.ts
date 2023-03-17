import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Bienvenido'
  },
  {
    path: 'Nosotros',
    component: NosotrosComponent,
    title: '¿Quienes somos?'
  },
  {
    path: 'Galeria',
    component: GaleriaComponent,
    title: 'Nuestos trabajos'
  },
  {
    path: 'Servicios',
    component: ServiciosComponent,
    title: 'Nuestos servicios'
  },
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
