import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-finanzas-page',
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './finanzas-page.component.html',
})
export class FinanzasPageComponent {

  abrirModal() {
  const modal = document.getElementById('mi_modal') as HTMLDialogElement;
  modal?.showModal();
  }

  firstBox = ('Mi experiencia en el departamento de Finanzas me permitió entender su rol más allá de los números. Es un área estratégica que conecta información clave con decisiones operativas, garantiza la sostenibilidad de cada línea de negocio y ofrece una visión integral del funcionamiento de la empresa. Haber formado parte de ese proceso me ayudó a desarrollar criterio, precisión y una mirada más completa del negocio.')

  miRol = ('Finance Trainee')

  funcionesRealizadas: string[] = [
    'Registro de conciliaciones bancarias',
    'Facturación de ventas masiva (Sinapsis)',
    'Conciliaciones con operadoras de Ekiipago',
    'Reportes de conciliaciones'
  ];

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
