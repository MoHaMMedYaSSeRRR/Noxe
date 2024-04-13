import { Movie } from './../../Core/interfaces/movie';
import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/Core/Services/movies.service';
import { Tv } from 'src/app/Core/interfaces/tv';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  constructor(private _MoviesService:MoviesService){}
  Tv: Tv |any = []  as Tv[];
  @Input() index! :number ;



  path:string= `https://image.tmdb.org/t/p/w500`

  ngOnInit(): void {
    this._MoviesService.getTrending('tv').subscribe({
      next: data => {
        this.Tv =(this.index === 10) ? data.results.slice(0, 10) : data.results;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
