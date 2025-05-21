import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-introduction-page',
  imports: [],
  templateUrl: './introduction-page.component.html',
})
export class IntroductionPageComponent {

  uAndromedaDescription = signal('Universidad Andrómeda es un programa que identifica y forma jóvenes talentos, brindándoles herramientas reales para crecer profesionalmente y desarrollar su máximo potencial en el mundo laboral, a través de experiencias prácticas, mentoría y participación en proyectos de alto impacto.')

  oThielenDescription = signal('Joven en formación con experiencia en finanzas y actualmente en transición hacia el desarrollo web. Apasionado por el aprendizaje autodidacta y la resolución de problemas, siempre en búsqueda de nuevas herramientas y conocimientos para seguir creciendo profesionalmente.')
 }
