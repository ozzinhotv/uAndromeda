import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styles: [`
    .swiper {
      width: 100%;
    }
    .swiper-slide img {
      height: 600px;
      width: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  `]
})
export class CarouselComponent implements AfterViewInit {
  images = [
    'assets/grada.jpg',
    'assets/diaPlaya.jpg',
    'assets/pingpong.jpg',
    'assets/navidad.jpg',
    'assets/planta.jpeg'
  ];

  @ViewChild('swiperDiv', { static: false }) swiperDiv!: ElementRef;

  ngAfterViewInit(): void {
    const element = this.swiperDiv?.nativeElement;
    if (!element) return;

    const swiper = new Swiper(element, {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination],
      pagination: { el: '.swiper-pagination' },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      scrollbar: { el: '.swiper-scrollbar' },
    });
  }
}
