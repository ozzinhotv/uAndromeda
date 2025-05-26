import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ekiipago',
  imports: [CommonModule],
  templateUrl: './ekiipago.component.html',
})
export class EkiipagoComponent {

  headerTitle = 'Ekiipago';
  headerDescription = 'Soluciones de pago tecnológicas para el comercio moderno'


  descriptionTitle = '📌 Descripción';
  description = 'Empresa que ofrece alternativas y soluciones de pagos innovadores y tecnológicos a distintos comercios, instituciones, páginas web, entre otros.'

  productos = '🛠️ Productos/Servicios';
  productosList: string[] = [
    'Boton de pago',
    'Link de pago movil',
    'Recarga de pagos de servicios',
  ];

  website = { name: 'ekiipago.com', url: 'https://www.ekiipago.com/' };

  instagram = { handle: '@ekiipago', url: 'https://instagram.com/ekiipago' };

  linkedins = [
    { name: 'Ekiipago', url: 'https://www.linkedin.com/company/ekiipago' },
  ];

 }
