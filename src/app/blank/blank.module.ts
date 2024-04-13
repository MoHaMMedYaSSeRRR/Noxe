import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { ProfileComponent } from './profile/profile.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    ProfileComponent,
    MoviedetailsComponent,
    TvdetailsComponent,
    PersondetailsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BlankRoutingModule
  ]
})
export class BlankModule { }
