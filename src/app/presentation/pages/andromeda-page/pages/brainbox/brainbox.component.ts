import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brainbox',
  imports: [CommonModule],
  templateUrl: './brainbox.component.html',
})
export class BrainboxComponent {

  logo = 'assets/brainboxLogo.png';
  headerTitle = 'Brainbox';
  headerDescription = 'Flexibilidad y colaboración en un solo espacio de trabajo'

  descriptionTitle = '📌 Descripción';
  description = 'Espacio de trabajo compartido que ofrece a profesionales y empresas flexibilidad, servicios básicos de oficina y un entorno colaborativo sin el compromiso de una oficina fija.'

  productos = '🛠️ Productos/Servicios';
  productosList: string[] = [
    'Internet de alta velocidad y seguro',
    'Uso de espacios comunes',
    'Impresora y escáner',
    'Café y té gratis',
    'Minimercado'
  ];

  website = { name: 'brainbox.work', url: 'https://brainbox.work/' };

  instagram = { handle: '@brainbox.work', url: 'https://instagram.com/brainbox.work' };

  linkedins = 'No tiene';

 }
