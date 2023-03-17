import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('loader') loader!: ElementRef<HTMLDivElement>;
  showLoader: boolean = true;
  ngAfterViewInit(): void {
    this.loader.nativeElement.addEventListener('animationend', () => {
      this.showLoader = false;
    });
  }
}
