/**
 * Routing File for Main Layout 
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Routes } from '@angular/router';

/* All pages routs will be placed here */
import { PageComponent } from '../../pages/page/page.component';
import { Page2Component } from '../../pages/page2/page2.component';




/* Imports */
export const ContentRoutes: Routes = [
    
 /* Routing Specification, place all "pages" that will be created here under the right alias and path */    
 { 
    path: 'page',
    component: PageComponent,
    
    pathMatch: 'full',
    
 },
   { 
    path: 'page2',
    component: Page2Component,
    pathMatch: 'full',
    
 }, 
];

