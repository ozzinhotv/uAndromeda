import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.component.html',
})
export class ExperienciaComponent {

  introduccion =  ('Desde 2022 formo parte del equipo de Andrómeda Ventures, donde he tenido la oportunidad de crecer profesionalmente dentro del área de Finanzas. Comencé como pasante y con el tiempo me fui involucrando en tareas clave como conciliaciones bancarias, facturación masiva, control de movimientos contables y atención al cliente. Esta experiencia me permitió desarrollar una visión integral del funcionamiento de las operaciones financieras dentro de una empresa tecnológica. Gracias a este recorrido, también pude identificar mi interés por el desarrollo web, lo que me llevó a formarme como Full Stack Developer y comenzar mi transición hacia el área de Tecnología.')

  experiencia = ('Hace dos años empecé mi viaje en la galaxia Andrómeda, donde mi primera nave espacial fue el departamento de finanzas, capitaneado por Rafael Rollingson, en el área de administración...')


  abrirModal() {
  const modal = document.getElementById('mi_modal') as HTMLDialogElement;
  modal?.showModal();
  }

 }


  
