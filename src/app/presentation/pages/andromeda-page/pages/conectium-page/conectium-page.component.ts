import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conectium-page',
  imports: [CommonModule],
  templateUrl: './conectium-page.component.html',
})
export class ConectiumPageComponent {

  titleHeader = 'Conectium';
  descriptionHeader = 'Especialistas en transformación digital y estrategias de marca';

  descriptionTitle = 'Descripción';
  description = 'Conectium es una empresa especializada en la transformación digital, ofreciendo soluciones personalizadas con tecnología avanzada. Se enfocan en crear productos innovadores, distribuir contenido de manera efectiva y desarrollar estrategias digitales basadas en datos para posicionar marcas y mejorar su rentabilidad en el entorno global.'

  productos = '🛠️ Productos/Servicios';
  productosList: string[]  = [
      'Aqustico',
      'Tribudeportiva',
      'Vida Fit',
      'Soy Zen',
      'Mandarina Tec'
  ]

  webPage = '🌐 Página Web'
  webPageLink = [
    {
      title: 'Conectium',
      url: 'https://conectium.com/'
    },
    {
      title: 'Aqustico',
      url: 'https://aqustico.com/'
    },
    {
      title: 'Tribudeportiva',
      url: 'https://tribudeportiva.com/'
    },
    {
      title: 'Vida Fit',
      url: 'https://vidafit.com/'
    },
    {
      title: 'Soy Zen',
      url: 'https://soyzen.com/'
    },
    {
      title: 'Mandarina Tec',
      url: 'https://mandarinatec.com/'
    }
  ];

  instagram = '📸 Instagram';
  igUsername = [
    {
      title: '@conectium',
      url: 'https://www.instagram.com/conectium/'
    },
    {
      title: '@aqusticostreaming',
      url: 'https://www.instagram.com/aqusticostreaming'
    },
    {
      title: '@somostribudeportiva',
      url: 'https://www.instagram.com/somostribudeportiva'
    },
    {
      title: '@mandarina.tec',
      url: 'https://www.instagram.com/mandarina.tec'
    },
    {
      title: '@somosvidafit',
      url: 'https://www.instagram.com/somosvidafit'
    },
    {
      title: '@_soyzen',
      url: 'https://www.instagram.com/_soyzen'
    },
  ]

  
 }
