import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinmovil',
  imports: [CommonModule],
  templateUrl: './spinmovil.component.html',
})
export class SpinmovilComponent {

  headerTitle = 'Spinmovil';
  headerDescription = 'Multichannel Marketing Hub para campañas más efectivas'

  descriptionTitle = '📌 Descripción';
  description = 'Spinmovil es una extensión de Conectium especializada en el Multichannel Marketing Hub (MMH), una plataforma que gestiona campañas de marketing de forma eficaz, buscando ahorrar tiempo y esfuerzo y mejorar la eficiencia operativa de las empresas.'

  productos = '🛠️ Productos/Servicios';
  productosList: string[] = [
    'Canales preferidos',
    'Mensajería de texto',
    'Email marketing',
    'WhatsApp Business API'
  ];

  website = { name: 'spinmovil.com', url: 'https://spinmovil.com/' };

  instagram = { handle: '@spinmovil', url: 'https://instagram.com/spinmovil' };

  linkedins = 'No tiene';

 }
