import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { HomeModule } from '@workspace/home';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, HttpClientModule, HomeModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
