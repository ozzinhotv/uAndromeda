import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BUSINESSES } from '../../components/andromeda-layout/bussiness.data';
import { AndromedaLayoutComponent } from "../../components/andromeda-layout/andromeda-layout.component";


@Component({
  selector: 'app-balsamal',
  imports: [CommonModule, AndromedaLayoutComponent],
  templateUrl: './balsamal.component.html',
})
export class BalsamalComponent {

  data = BUSINESSES['balsamal'];

 }
