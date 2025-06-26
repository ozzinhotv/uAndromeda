import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-first-page',
  imports: [RouterLink],
  templateUrl: './first-page.component.html',
})
export class FirstPageComponent { 

  logo = 'assets/logo_andromeda.png';

  slogan = 'Haciendo un mundo mejor, haciendo mejores cosas'



}
