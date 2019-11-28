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
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from '@angular/material';


/* All pages components will be placed here */
import { PageComponent }    from '../../pages/page/page.component';
import { Page2Component }    from '../../pages/page2/page2.component';
import { CardFormComponent }    from '../../shared/cards/card-form/card-form.component';
import { ConfirmationComponent } from '../../pages/confirmation/confirmation.component';
import { SummaryComponent } from '../../pages/summary/summary.component';
import { FetchcaseComponent } from '../../pages/fetchcase/fetchcase.component';
import { CardImageComponent }    from '../../shared/cards/card-image/card-image.component';
import { CardDefaultComponent }    from '../../shared/cards/card-default/card-default.component';
import { CardTmplComponent }    from '../../shared/cards/card-tmpl/card-tmpl.component';
import { CardConfirmationComponent } from '../../shared/cards/card-confirmation/card-confirmation.component'
import { CardFormFetchCaseComponent }    from '../../shared/cards/card-form-fetch-case/card-form-fetch-case.component';
import { CardTableComponent }    from '../../shared/cards/card-table/card-table.component';
import { EditCaseComponent } from 'app/pages/edit-case/edit-case.component';
import { CardPatientDataComponent } from 'app/shared/cards/card-patient-data/card-patient-data.component';
import { FrontpageComponent } from '../../pages/frontpage/frontpage.component';
import { CardCaseNumber } from 'app/shared/cards/card-case-number/card-case-number.component';
import { PopupComponent } from '../../shared/cards/popup/popup.component';
import { ContentComponent } from './content.component';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContentRoutes),
    FormsModule,
    MatIconModule,
    NgbModule,
    ReactiveFormsModule,
    MatDialogModule,

    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
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
      CardConfirmationComponent,
      CardTableComponent,
      CardFormFetchCaseComponent,
      EditCaseComponent,
      CardPatientDataComponent,
      FetchcaseComponent,
      CardCaseNumber,
      PopupComponent,
  ],
  entryComponents: [PopupComponent],
})

export class ContentModule {}
