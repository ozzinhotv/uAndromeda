import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
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

  swiperDiv = viewChild.required<ElementRef>('swiperDiv');

  ngAfterViewInit(): void {
    const element = this.swiperDiv().nativeElement;
    if (!element) return;

    const swiper = new Swiper( element, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      modules: [
        Navigation, Pagination
      ],

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
