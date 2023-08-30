import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';
import { routes } from './home.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent],
  // exports: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule {}
