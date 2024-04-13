import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService{
 
  constructor(private _HttpClient:HttpClient) { }



  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f04abd28a278b378a10634e8da13acc0`);
  }

  getDetails(mediaType:string ,id : number):Observable<any>
   {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f04abd28a278b378a10634e8da13acc0&language=en-US`)
  }

}
