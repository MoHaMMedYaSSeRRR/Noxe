import { AuthService } from 'src/app/Core/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    profileData:object |any = {};
    constructor(private _AuthService:AuthService){}

    ngOnInit(): void {
      this._AuthService.userData.subscribe(
        (data)=>{
          this.profileData = data
        }
      )
    }

}
