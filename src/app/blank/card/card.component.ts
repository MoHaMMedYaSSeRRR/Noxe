import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Core/interfaces/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() movie!:Movie ;
  @Input() path!:string ;


}
