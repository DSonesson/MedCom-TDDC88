/**
 * Routing File for Main Layout 
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Routes } from '@angular/router';

/* All pages routs will be placed here */
import { PageComponent } from '../../pages/page/page.component';

/* Imports */
export const MainLayoutRoutes: Routes = [
    
 /* Routing Specification, place all "pages" that will be created here under the right alias and path */    
 { path: '',  component: PageComponent },
];
