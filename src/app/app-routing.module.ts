import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
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
    path: 'Contacto',
    component: ContactoComponent,
    title: 'Contactenos'
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
