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
import { ContentRoutes } from './content.routing';

/* All pages components will be placed here */
import { PageComponent }    from '../../pages/page/page.component';
import { Page2Component }    from '../../pages/page2/page2.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContentRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
      PageComponent,
      Page2Component,
  ]
})

export class ContentModule {}
