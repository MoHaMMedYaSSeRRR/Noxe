import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  isLoading: boolean = false;
  apierror: string = '';

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  handleLogin(form: FormGroup) {
    this.isLoading = true;
    this._AuthService.Login(form.value).subscribe({
      next: (response) => {
        if (response.message == 'success') {
          this.isLoading = false;
          localStorage.setItem('mToken', response.token);
          this._AuthService.decoded();
          this._Router.navigate(['/home']);
        } else {
          this.isLoading = false;
          this.apierror = response.message;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
