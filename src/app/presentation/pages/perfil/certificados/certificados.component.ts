import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  imports: [ CommonModule],
  templateUrl: './certificados.component.html',
})
export class CertificadosComponent {

  certificados = [
    {
      titulo: 'Full Stack Developer, 4Geeks Academy',
      descripcion: 'Bootcamp intensivo de desarrollo web Full Stack, donde adquirí habilidades en HTML, CSS, JavaScript, Node.js y bases de datos.',
      imagen: 'assets/4geeks.png',
      alt: '4Geeks Academy'
    },
    {
      titulo: 'ChatGPT en Finanzas',
      descripcion: 'Curso especializado en la aplicación de ChatGPT para la optimización de procesos financieros.',
      imagen: 'assets/chatgptFinanzas.png',
      alt: 'ChatGPT en Finanzas'
    },
    {
      titulo: 'Gestión de Proyectos con ClickUp',
      descripcion: 'Curso sobre las mejores prácticas en la gestión de proyectos utilizando ClickUp, dictado por Luis Salazar.',
      imagen: 'assets/clickUp.png',
      alt: 'ClickUp'
    }
  ];

 }
