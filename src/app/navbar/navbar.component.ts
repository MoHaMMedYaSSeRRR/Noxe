import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Core/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;
  name:any='';
  constructor(private _AuthService:AuthService){ }

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:(data : any)=>{
          if(data !==null){
            this.isLogin=true;
            this.name =data.first_name;
          }
            else{
            this.isLogin=false;
          }
      }
    })
   
  }

  LogOut(): void {
    this._AuthService.logOut();
  }
}
