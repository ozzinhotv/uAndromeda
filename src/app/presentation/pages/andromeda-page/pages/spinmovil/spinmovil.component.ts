import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BUSINESSES } from '../../components/andromeda-layout/bussiness.data';
import { AndromedaLayoutComponent } from "../../components/andromeda-layout/andromeda-layout.component";

@Component({
  selector: 'app-spinmovil',
  imports: [CommonModule, AndromedaLayoutComponent],
  templateUrl: './spinmovil.component.html',
})
export class SpinmovilComponent {

  data = BUSINESSES['spinmovil'];

}
