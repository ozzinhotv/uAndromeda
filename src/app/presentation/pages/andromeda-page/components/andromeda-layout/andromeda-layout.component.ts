import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-andromeda-layout',
  imports: [CommonModule],
  templateUrl: './andromeda-layout.component.html',
})
export class AndromedaLayoutComponent {

  @Input() logo: string = '';
  @Input() headerTitle: string = '';
  @Input() headerDescription: string = '';
  @Input() descriptionTitle: string = '';
  @Input() description: string = '';
  @Input() productos: string = '';
  @Input() productosList: string[] = [];
  @Input() productosDescription: string = '';

  @Input() website: { name: string; url: string } | null = null;
  @Input() instagram: { handle: string; url: string } | null = null;
  @Input() linkedins: { name: string; url: string }[] = []
}


 
