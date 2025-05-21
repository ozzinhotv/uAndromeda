import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mi-recorrido-page',
  imports: [],
  templateUrl: './mi-recorrido-page.component.html',
})
export class MirecorridoPageComponent {

  experiencia = signal('Hace dos años empecé mi viaje en la galaxia Andrómeda, donde mi primera nave espacial fue el departamento de finanzas, capitaneado por Rafael Rollingson, en el área de administración...')
 }
