import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AndromedaLayoutComponent } from "../../components/andromeda-layout/andromeda-layout.component";
import { BUSINESSES } from '../../components/andromeda-layout/bussiness.data';

@Component({
  selector: 'app-peregrina',
  imports: [CommonModule, AndromedaLayoutComponent],
  templateUrl: './peregrina.component.html',
})
export class PeregrinaComponent { 

  data = BUSINESSES['peregrina'];

}
