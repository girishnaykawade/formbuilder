import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormFieldsComponent} from './form-fields/form-fields.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
          path: 'dashboard/upload',
          component: FormFieldsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
