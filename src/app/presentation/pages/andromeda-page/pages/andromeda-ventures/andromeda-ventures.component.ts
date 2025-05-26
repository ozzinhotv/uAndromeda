import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-andromeda-ventures',
  imports: [CommonModule],
  templateUrl: './andromeda-ventures.component.html',
})
export class AndromedaVenturesComponent { 

  logo = 'assets/logo_andromeda.png';
  ceoPhoto = 'assets/Alfonso.png';
  title = 'Universo Andrómeda';
  subtitle = 'Innovación, propósito y expansión internacional';

  historia = {
    fundacion: 'Marzo 2000',
    fundador: 'Alfonso Riveroll',
    visionMision: 'Haciendo un mundo mejor, haciendo mejores cosas',
    descripcion:
      'Con este eslogan, la empresa se enfoca en transformar ideas en propósitos, utilizando tecnología avanzada, herramientas y soluciones innovadoras.',
  };

  sedes = [
    {
      nombre: '1. Caracas Campus (Sede Principal)',
      descripcion:
        'Actualmente tenemos dos oficinas (una dedicada a HolaDoc). Próximamente se abrirá la tercera para Finanzas y otros.',
      ubicacion:
        'Calle Altagracia, La Trinidad, Municipio Baruta, Estado Miranda. Piso 1.',
    },
    {
      nombre: '2. Planta de Cervecentro',
      descripcion: '',
      ubicacion:
        'Calle Sur con Calle Este, La Victoria, Edo. Aragua, C.P. 2121, Venezuela.',
    },
    {
      nombre: '3. Planta Balsamal',
      descripcion: '',
      ubicacion: 'Barquisimeto, Lara.',
    },
    {
      nombre: '4. Brainbox',
      descripcion: '',
      ubicacion: '142 NW 37th St, Miami, FL 33127, United States.',
    },
  ];


}
