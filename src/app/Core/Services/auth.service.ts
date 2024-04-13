import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData= new BehaviorSubject(null);
  userName= new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('mToken')!==null){
      this.decoded();
    }
   }

  decoded(){
    const encodedToken : any = localStorage.getItem('mToken')
    const decodedToken :any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  }
  Register( userData:object):Observable<any>
  {
    return this._HttpClient.post(`https://movies-api.routemisr.com/signup` , userData);
  }

  Login(userData : object):Observable<any>
  {
    return this._HttpClient.post(`https://movies-api.routemisr.com/signin` , userData);
  }
  logOut(){
    this.userData.next(null);
    localStorage.removeItem('mToken');
    this._Router.navigate(['/login'])
  }


}
