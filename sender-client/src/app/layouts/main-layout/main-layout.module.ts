/**
 * Moudle File for Main Layout 
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutRoutes } from './main-layout.routing';

/* All pages components will be placed here */
import { PageComponent }    from '../../pages/page/page.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
      PageComponent,
  ]
})

export class MainLayoutModule {}
