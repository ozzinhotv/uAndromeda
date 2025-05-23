import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-holadoc',
  imports: [CommonModule],
  templateUrl: './holadoc.component.html',
})
export class HoladocComponent { 

  headerTitle = 'Holadoc';
  headerDescription = 'Consultas médicas online desde cualquier lugar'


  descriptionTitle = '📌 Descripción';
  description = 'Empresa de servicios de telemedicina online con una aplicación llamada HolaDoc enfocada en realizar consultas médicas de manera virtual.'

  productos = '🛠️ Productos/Servicios';
  productosDescription = 'Servicio de consultas médicas a través de la aplicación HolaDoc.'

  website = { name: 'holadoc.com', url: 'https://holadoc.com/' };

  instagram = { handle: '@somosholadoc', url: 'https://instagram.com/somosholadoc' };

  linkedins = [
    { name: 'Holadoc', url: 'https://www.linkedin.com/company/holadoc' },
    { name: 'Sinapsis', url: 'https://www.linkedin.com/company/sinapsis' }
  ];





}
