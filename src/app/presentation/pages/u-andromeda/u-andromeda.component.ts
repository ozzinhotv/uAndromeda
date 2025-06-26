import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-u-andromeda',
  imports: [CommonModule],
  templateUrl: './u-andromeda.component.html',
})
export class UAndromedaComponent {

  uAndromedaDescription = ('Universidad Andrómeda es un programa que identifica y forma jóvenes talentos, brindándoles herramientas reales para crecer profesionalmente y desarrollar su máximo potencial en el mundo laboral, a través de experiencias prácticas, mentoría y participación en proyectos de alto impacto.')

  features = [
    {
      title: 'Asesoramiento Profesional',
      emoji: '🤝',
      description: 'Mentoría individual, acompañamiento y orientación para el crecimiento profesional.'
    },
    {
      title: 'Talleres y Capacitaciones',
      emoji: '📚',
      description: 'Formaciones prácticas, charlas con expertos y experiencias educativas reales.'
    },
    {
      title: 'Liderazgo',
      emoji: '🚀',
      description: 'Participación activa en proyectos, toma de decisiones y trabajo colaborativo.'
    }
  ];

}
