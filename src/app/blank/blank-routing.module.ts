import { ProfileComponent } from './profile/profile.component';
import { TvComponent } from './tv/tv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'people' , component: PeopleComponent },
  { path: 'tv' , component:TvComponent},
  { path: 'profile' , component:ProfileComponent},
  { path: 'moviedetails/:id' , component:MoviedetailsComponent},
    { path: 'tvdetails/:id' , component:TvdetailsComponent},
    { path: 'persondetails/:id' , component:PersondetailsComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankRoutingModule { }
