import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [ CommonModule ],
  templateUrl: './proyectos.component.html',
})
export class ProyectosComponent {
  modalAbierto = false;
  proyectoSeleccionado: any = null;

  proyectos = [
    {
      titulo: 'Página de la Fundación Villanueva',
      descripcion: 'Página web donde se pueden ver los proyectos y actividades de la fundación. (Sigue en desarrollo)',
      librerias: 'React, Bootstrap, i18n',
      imagen: 'assets/fvillanueva.jpg',
      verDetalles: 'https://fundacionvillanueva.vercel.app/'
    },
    {
      titulo: 'Reservalo',
      descripcion: 'Aplicación móvil para reservas de espacios deportivos en Caracas.',
      librerias: 'Figma',
      imagen: 'assets/Reservalo.png'
    },
  ];

  verDetalles(proyecto: any) {
    if (proyecto.verDetalles) {
      window.open(proyecto.verDetalles, '_blank');
    }
  }

  abrirModal(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.proyectoSeleccionado = null;
  }
}
