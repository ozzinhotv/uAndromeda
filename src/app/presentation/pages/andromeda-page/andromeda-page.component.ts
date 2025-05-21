import { Component } from '@angular/core';
import { TopMenuAndromedaComponent } from "./components/top-menu-andromeda/top-menu-andromeda.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-andromeda-page',
  imports: [TopMenuAndromedaComponent, RouterOutlet],
  templateUrl: './andromeda-page.component.html',
})
export class AndromedaPageComponent { }
