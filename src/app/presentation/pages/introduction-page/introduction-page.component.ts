import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-introduction-page',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './introduction-page.component.html',
})
export class IntroductionPageComponent {

constructor(private router: Router) {}

  seccionesNavbar = [
    {
      titulo: 'Andrómeda 🏢',
      descripcion: 'Breve historia de la organización, su estructura actual y el rol de cada línea de negocio dentro del ecosistema de Andrómeda Ventures.',
      ruta: '/presentation/andromeda/andromeda'
    },
    {
      titulo: 'Mi Recorrido 🧭',
      descripcion: 'Relato de mi paso por los departamentos de Finanzas y Tecnología, incluyendo aprendizajes, desafíos y logros destacados.',
      ruta: '/presentation/miRecorrido/finanzas'
    },
    {
      titulo: 'Universidad Andrómeda 🎓',
      descripcion: 'Presentación del programa interno de formación para pasantes, enfocado en crecimiento profesional y participación en proyectos reales.',
      ruta: '/presentation/u-andromeda'
    },
    {
      titulo: 'Perfil 👤',
      descripcion: 'Espacio personal donde comparto más sobre mi experiencia, certificaciones, proyectos propios y aspiraciones profesionales.',
      ruta: '/presentation/perfil/experiencia'
    }
  ];

  navegar(ruta: string) {
    this.router.navigateByUrl(ruta);
  }


  oThielenDescription = ('Joven en formación con experiencia en finanzas y actualmente en transición hacia el desarrollo web. Apasionado por el aprendizaje autodidacta y la resolución de problemas, siempre en búsqueda de nuevas herramientas y conocimientos para seguir creciendo profesionalmente.')
 
  fortalezas: string[] = [
  '✅ Innovador y estratégico',
  '✅ Interés en tecnología y diseño web',
  '✅ Comunicación efectiva y liderazgo',
  '✅ Motivado por el aprendizaje continuo'
  ];


}
