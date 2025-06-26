import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './perfil.component.html',
})
export class PerfilComponent { }
