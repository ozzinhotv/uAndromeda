import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-finanzas-page',
  imports: [UpperCasePipe],
  templateUrl: './finanzas-page.component.html',
})
export class FinanzasPageComponent {

  firstBox = signal('Mi experiencia en el departamento de Finanzas me permitió entender su rol más allá de los números. Es un área estratégica que conecta información clave con decisiones operativas, garantiza la sostenibilidad de cada línea de negocio y ofrece una visión integral del funcionamiento de la empresa. Haber formado parte de ese proceso me ayudó a desarrollar criterio, precisión y una mirada más completa del negocio.')

  miRol = signal('Finance Trainee')
 }
