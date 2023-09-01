import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';


@Component({
  selector: 'workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {


  password!: string;
  email!: string;

  loading = false;
  submitted = false;
  error = '';

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
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });



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
          console.log(err, 'ERRRROOR')
        }
      });
  }

}
