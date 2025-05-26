import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-balsamal',
  imports: [CommonModule],
  templateUrl: './balsamal.component.html',
})
export class BalsamalComponent {

  headerTitle = 'Destilería Balsamal';
  headerDescription = 'Fábrica de bebidas alcohólicas especializada en cocuy. Su actividad principal es la destilación de agave. Además de la venta nacional, exportan internacionalmente, difundiendo el valor cultural de esta bebida única.'


  descriptionTitle = '📌 Descripción';
  description = 'Fábrica de cervezas, cuyo proceso de elaboración es semi artesanal, innovando con sus recetas para obtener sabores y aromas únicos en el mercado venezolano.'

  productos = '🛠️ Productos/Servicios';
  productosList: string[] = [
    'Cocuy Balsamal Claro y Reposado',
    'Verdor Claro y Reposado (Internacional)'
  ];

  website = { name: 'cocuybalsamal.com', url: 'https://cocuybalsamal.com' };

  instagram = { handle: '@cocuybalsamal', url: 'https://instagram.com/cocuybalsamal' };

  linkedins = 'No tiene';

 }
