import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './registration.routing';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule.forChild(routes),
  ]
})


export class RegistrationModule { }
