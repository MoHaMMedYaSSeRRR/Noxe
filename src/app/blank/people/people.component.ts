import { Person } from './../../Core/interfaces/person';
import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/Core/Services/movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  constructor(private _MoviesService:MoviesService){}
  person: Person |any = []  as Person[];
  @Input() index! :number ;



  path:string= `https://image.tmdb.org/t/p/w500`

  ngOnInit(): void {
    this._MoviesService.getTrending('person').subscribe({
      next: data => {
        this.person = (this.index === 10) ? data.results.slice(0, 10) : data.results;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
