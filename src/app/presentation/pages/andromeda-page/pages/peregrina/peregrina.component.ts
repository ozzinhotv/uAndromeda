import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-peregrina',
  imports: [ CommonModule],
  templateUrl: './peregrina.component.html',
})
export class PeregrinaComponent { 

  headerTitle = 'Peregrina';
  headerDescription = 'Cervezas artesanales con innovación venezolana'


  descriptionTitle = '📌 Descripción';
  description = 'Fábrica de cervezas, cuyo proceso de elaboración es semi artesanal, innovando con sus recetas para obtener sabores y aromas únicos en el mercado venezolano.'

  productos = '🛠️ Productos/Servicios';
  productosList: string[] = [
    'Vienna Lagger',
    'Honey Light',
    'German Pills',
    'Munich Hells'

  ];

  website = { name: 'peregrinabirra.com', url: 'https://peregrinabirra.com/' };

  instagram = { handle: '@peregrinabirra', url: 'https://instagram.com/peregrinabirra' };

  linkedins = [
    { name: 'Peregrina', url: 'https://www.linkedin.com/showcase/cervezaperegrina/' },
  ];

}
