import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from "./start/start.component";
import { ConfirmationComponent} from "./confirmation/confirmation.component";
import { SummaryComponent } from "./summary/summary.component";


const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'confirmation', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
