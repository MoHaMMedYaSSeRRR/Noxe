import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Core/Services/movies.service';
import { Genre } from 'src/app/Core/interfaces/genre';
import { Movie } from 'src/app/Core/interfaces/movie';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {
  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  movieDetails: Movie | any = [] as unknown as Movie;
  path: string = `https://image.tmdb.org/t/p/w500`;

  id: number | any = 0;
  genres:Genre []= [];

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    });
    this._MoviesService.getDetails('movie',this.id).subscribe({
      next: (data) => {
        this.movieDetails = data;
        this.genres =data.genres;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

 
}
