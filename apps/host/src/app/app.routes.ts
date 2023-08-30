import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GuardService } from './guard.service';



export const appRoutes: Route[] = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'remote',
    canActivate: [GuardService],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        // ('remote_module_name', './exposed_routes_path')
          import('remote-app/RemoteAppModule').then((m) => m.RemoteEntryModule),
      }
    ]
  }
];
