import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Core/Services/movies.service';
import { Genre } from 'src/app/Core/interfaces/genre';
import { Movie } from 'src/app/Core/interfaces/movie';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  tvDetails: Movie | any = []  as Movie[];
  path: string = `https://image.tmdb.org/t/p/w500`;

  id: number | any = 0;
  genres:Genre []= [];

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    });
    this._MoviesService.getDetails('tv',this.id).subscribe({
      next: (data) => {
        this.tvDetails = data;
        this.genres =data.genres;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

 
}
