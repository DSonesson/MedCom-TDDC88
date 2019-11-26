/**
 * Routing File for App 
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';

/* Route Decleration */
export const AppRoutes: Routes = [
 {
    path: '',
    component: ContentComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/content/content.module#ContentModule'
  }]},
]
