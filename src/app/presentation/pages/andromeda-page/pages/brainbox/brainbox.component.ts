import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BUSINESSES } from '../../components/andromeda-layout/bussiness.data';
import { AndromedaLayoutComponent } from "../../components/andromeda-layout/andromeda-layout.component";

@Component({
  selector: 'app-brainbox',
  imports: [CommonModule, AndromedaLayoutComponent],
  templateUrl: './brainbox.component.html',
})
export class BrainboxComponent {

  data = BUSINESSES['brainbox'];

 }
