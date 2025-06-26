import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atech-page',
  imports: [ UpperCasePipe, CommonModule],
  templateUrl: './atech-page.component.html',
})
export class AtechPageComponent {

  miRol = ('Developer Trainee')

  funcionesRealizadas: string[] = [
    'Investigación de herramientas de QA con IA para testing automatizado',
    'Reuniones con proveedores internacionales para evaluación de servicios',
    'Automatización de test con Cypress',
    'Reportes semanales con Carlos Alonzo y Francis Bompart',
    'Capacitación del equipo en programación y QA'
  ];


  cursosRealizados = [
    {
      titulo: 'Angular: De cero a experto (Edición 2025)',
      url: 'https://www.udemy.com/course/angular-fernando-herrera/'
    },
    {
      titulo: 'Angular: De cero a experto (Legacy)',
      url: 'https://www.udemy.com/course/angular-2-fernando-herrera/'
    },
    {
      titulo: 'JavaScript for Beginners - Complete Tutorial',
      url: 'https://www.udemy.com/course/javascript-beginners-complete-tutorial/'
    },
    {
      titulo: 'Google UX Design Professional Certificate',
      url: 'https://www.coursera.org/professional-certificates/google-ux-design'
    },
    {
      titulo: 'Clean Code by: Maximilian Schwarzmüller',
      url: 'https://www.udemy.com/course/writing-clean-code/'
    }

  ];

  proyectosAFuturo = [
    'Diseño y desarrollo de la plataforma web para Universidad Andrómeda, una iniciativa interna de formación para pasantes',
    'Participación en sprints reales con el equipo de Conectium, colaborando en productos activos para comenzar mi integración laboral'
  ];


 }
