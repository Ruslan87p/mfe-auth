import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';



@Component({
  selector: 'workspace-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent {

  isSubmitted = false;
  private tokenKey = 'token';
  lottieWidth = '500px';
  lottieHeight = '600px';


  options: AnimationOptions = {
    path: '../../assets/animation/animation-registration.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

    registrationForm = this.fb.group({
      gender: ['male'],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })

    onSubmit() {
      // console.log(this.registrationForm.value, 'form submit');
      this.isSubmitted = true;
      this.authService.registration(this.registrationForm.value).subscribe({
        next: data => {
          console.log(data);
        },
        error: err => {
          console.log(err, 'ERRRROOR')
        }
      });
      localStorage.setItem(this.tokenKey, 'token');
      // this.router.navigate(['/']);
    }

}
