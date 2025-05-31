import { Component, Input } from '@angular/core';
import { Itours } from '../../../../interfaces/itours';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
@Input() elements!:Itours
}
