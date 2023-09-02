import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';


@Component({
  selector: 'workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  // var w = window.innerWidth;
  // var h = window.innerHeight;
  // OR
  // const width  = window.innerWidth || document.documentElement.clientWidth ||
  // document.body.clientWidth;
  // const height = window.innerHeight|| document.documentElement.clientHeight||
  // document.body.clientHeight;
  // console.log(width, height);
  lottieWidth!: '500px';
  lottieHeight!: '600px';
  password!: string;
  email!: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  incorrectEmail = false;
  incorrectPass = false;

  options: AnimationOptions = {
    path: '../../assets/animation/animation-loading.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


  constructor(
      public fb: FormBuilder,
      private router: Router,
      private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }




  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe({
        next: data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/remote']);
        },
        error: err => {
          this.incorrectEmail = true;
          this.incorrectPass = true;
          this.hideErrors()
        }
      });
  }

  hideErrors() {
    setTimeout( () => {
      this.incorrectEmail = false;
      this.incorrectPass = false;
    },5000)
  }


}
