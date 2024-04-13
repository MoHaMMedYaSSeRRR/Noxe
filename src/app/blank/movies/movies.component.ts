import { Component,Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Core/Services/movies.service';
import { Movie } from 'src/app/Core/interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){}
   movies: Movie[] = []; // Declare movies as Input property
 @Input() index! :number ;


  path:string= `https://image.tmdb.org/t/p/w500`

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe({
      next: data => {
        this.movies = (this.index === 10) ? data.results.slice(0, 10) : data.results;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
