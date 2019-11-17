/**
 * Moudle File for Main Layout 
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentRoutes } from './content.routing';

/* All pages components will be placed here */
import { PageComponent }    from '../../pages/page/page.component';
import { Page2Component }    from '../../pages/page2/page2.component';
import { CardFormComponent }    from '../../shared/cards/card-form/card-form.component';
import { ConfirmationComponent } from '../../pages/confirmation/confirmation.component';
import { SummaryComponent } from '../../pages/summary/summary.component';
import { FrontpageComponent } from '../../pages/frontpage/frontpage.component';
import { CardImageComponent }    from '../../shared/cards/card-image/card-image.component';
import { CardDefaultComponent }    from '../../shared/cards/card-default/card-default.component';
import { CardTmplComponent }    from '../../shared/cards/card-tmpl/card-tmpl.component';
import { CardFormFetchCaseComponent }    from '../../shared/cards/card-form-fetch-case/card-form-fetch-case.component';
import { CardTableComponent }    from '../../shared/cards/card-table/card-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContentRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
      PageComponent,
      Page2Component,
      CardFormComponent,
      CardImageComponent,
      CardDefaultComponent,
      CardTmplComponent,
      FrontpageComponent,
      SummaryComponent,
      ConfirmationComponent,
      CardTableComponent,
      CardFormFetchCaseComponent
  ]
})

export class ContentModule {}
