import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BUSINESSES } from '../../components/andromeda-layout/bussiness.data';
import { AndromedaLayoutComponent } from "../../components/andromeda-layout/andromeda-layout.component";

@Component({
  selector: 'app-ekiipago',
  imports: [CommonModule, AndromedaLayoutComponent],
  templateUrl: './ekiipago.component.html',
})
export class EkiipagoComponent {

 data = BUSINESSES['ekiipago'];

 }
