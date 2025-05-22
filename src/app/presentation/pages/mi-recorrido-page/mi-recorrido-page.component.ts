import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-recorrido-page',
  imports: [CommonModule],
  templateUrl: './mi-recorrido-page.component.html',
})
export class MirecorridoPageComponent {

  abrirModal() {
  const modal = document.getElementById('mi_modal') as HTMLDialogElement;
  modal?.showModal();
}

  experiencia = ('Hace dos años empecé mi viaje en la galaxia Andrómeda, donde mi primera nave espacial fue el departamento de finanzas, capitaneado por Rafael Rollingson, en el área de administración...')

  entregables = [
  {
    titulo: 'Informe final de pasantía',
    url: 'https://docs.google.com/document/d/1o5cZvTXjuQpE00oY-NEt_tBjAa28_RuX/edit?usp=drive_link&ouid=112047790196349309038&rtpof=true&sd=true'
  },
  {
    titulo: 'PROCESO DE FACTURACIÓN MASIVA SINAPSIS',
    url: 'https://drive.google.com/file/d/1yp79ztn_VwKSyz5Y145KRxTqUtXSYSUW/view?usp=sharing'
  },
  {
    titulo: 'Conciliaciones Ekiiboton',
    url: 'https://drive.google.com/drive/folders/1i4BEGCbwkV5KTdH-SNcCdLeK-4URFBBV?usp=sharing'
  },
  {
    titulo: 'Conciliación Semanal Ekiipago',
    url: 'https://drive.google.com/drive/folders/1KYH1oVAcOsqr-eZm94juOA-9pfw_JkhL?usp=sharing'
  },
  {
    titulo: 'Plan de Trabajo IRENE ROSALES',
    url: 'https://docs.google.com/document/d/1LNE5hRLyxfTlp4YGN0xunYvlxBJjp1As/edit?usp=sharing&ouid=112047790196349309038&rtpof=true&sd=true'
  }
];



 }
