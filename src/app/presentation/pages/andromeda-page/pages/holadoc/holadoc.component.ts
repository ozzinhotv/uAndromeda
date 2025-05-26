import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BUSINESSES } from '../../components/andromeda-layout/bussiness.data';
import { AndromedaLayoutComponent } from "../../components/andromeda-layout/andromeda-layout.component";

@Component({
  selector: 'app-holadoc',
  imports: [CommonModule, AndromedaLayoutComponent],
  templateUrl: './holadoc.component.html',
})
export class HoladocComponent { 

 data = BUSINESSES['holadoc'];
 
}
