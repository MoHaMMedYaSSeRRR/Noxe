import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}

  isLoading: boolean = false;
  apierror:string = "";


  RegisterForm:FormGroup = new FormGroup({
    first_name: new FormControl(null,[Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required , Validators.email]),
    age : new FormControl(null , [Validators.required , Validators.pattern(/^(1[89]|[2-9]\d)$/)]) ,
    password:new FormControl(null , [Validators.required ,Validators.pattern(/^[A-z][a-z0-9]{3,}$/)]),
  })



    handleRegister(form:FormGroup){
      this.isLoading=true;
      this._AuthService.Register(form.value).subscribe({
        next:(response)=>{
          if(response.message=="success"){
                this.isLoading=false;
          this._Router.navigate(['/login']);
          }
          else {
            this.isLoading = false ;
         this.apierror =response.errors.email.message;
          }
        },   
        error:(error)=>{
          console.log(error);
        }   
      })
      }
}
