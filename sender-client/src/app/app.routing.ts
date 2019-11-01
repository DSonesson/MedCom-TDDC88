/**
 * Routing File for App 
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

/* Route Decleration */
export const AppRoutes: Routes = [
 {
    path: '',
    component: MainLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/main-layout/main-layout.module#MainLayoutModule'
  }]},
]
