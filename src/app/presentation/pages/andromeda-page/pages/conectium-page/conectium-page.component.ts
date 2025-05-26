import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BUSINESSES } from '../../components/andromeda-layout/bussiness.data';
import { AndromedaLayoutComponent } from "../../components/andromeda-layout/andromeda-layout.component";

@Component({
  selector: 'app-conectium-page',
  imports: [CommonModule, AndromedaLayoutComponent],
  templateUrl: './conectium-page.component.html',
})
export class ConectiumPageComponent {
  
  data = BUSINESSES['conectium']
  
 }
