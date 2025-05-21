import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-presentation-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './presentationLayout.component.html',
})
export class PresentationLayoutComponent { }
