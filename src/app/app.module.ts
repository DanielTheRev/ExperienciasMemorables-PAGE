import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { IonicModule } from '@ionic/angular';
import { ImgBackgroundComponent } from './pages/home/components/img-background/img-background.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    NosotrosComponent,
    GaleriaComponent,
    ImgBackgroundComponent,
    ServiciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    IonicModule.forRoot(),
    NgOptimizedImage,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
