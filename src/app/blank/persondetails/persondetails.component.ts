import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Core/Services/movies.service';
import { Person } from 'src/app/Core/interfaces/person';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent {

  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  personDetails: Person | any = []  as Person[];
  path: string = `https://image.tmdb.org/t/p/w500`;

  id: number | any = 0;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    });
    this._MoviesService.getDetails('person',this.id).subscribe({
      next: (data) => {
        this.personDetails = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


}
