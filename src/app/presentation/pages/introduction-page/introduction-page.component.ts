import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';


@Component({
  selector: 'app-introduction-page',
  imports: [CommonModule],
  templateUrl: './introduction-page.component.html',
})
export class IntroductionPageComponent {

  uAndromedaDescription = ('Universidad Andrómeda es un programa que identifica y forma jóvenes talentos, brindándoles herramientas reales para crecer profesionalmente y desarrollar su máximo potencial en el mundo laboral, a través de experiencias prácticas, mentoría y participación en proyectos de alto impacto.')

  oThielenDescription = ('Joven en formación con experiencia en finanzas y actualmente en transición hacia el desarrollo web. Apasionado por el aprendizaje autodidacta y la resolución de problemas, siempre en búsqueda de nuevas herramientas y conocimientos para seguir creciendo profesionalmente.')
 
  fortalezas: string[] = [
  '✅ Innovador y estratégico',
  '✅ Interés en tecnología y diseño web',
  '✅ Comunicación efectiva y liderazgo',
  '✅ Motivado por el aprendizaje continuo'
  ];


}
