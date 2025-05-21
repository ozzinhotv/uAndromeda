import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-andromeda-layout',
  imports: [CommonModule],
  templateUrl: './andromeda-layout.component.html',
})
export class AndromedaLayoutComponent {

  logo = signal('');
  directorFoto = signal('');
  descripcion = signal('');
  productos = signal<string[]>([]);
  web = signal('');
  instagram = signal<string[]>([]);
  linkedin = signal<string[]>([]);

  loadContent(data: any) {
    this.logo.set(data.logo);
    this.directorFoto.set(data.directorFoto);
    this.descripcion.set(data.descripcion);
    this.productos.set(data.productos);
    this.web.set(data.web);
    this.instagram.set(data.instagram);
    this.linkedin.set(data.linkedin);
  }

 }
