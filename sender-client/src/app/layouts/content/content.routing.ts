/**
 * Routing File for Main Layout
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Routes } from "@angular/router";

/* All pages routs will be placed here */
import { ConfirmationComponent } from "../../pages/confirmation/confirmation.component";
import { SummaryComponent } from "../../pages/summary/summary.component";
import { FrontpageComponent } from "../../pages/frontpage/frontpage.component";
import { EditCaseComponent } from "app/pages/edit-case/edit-case.component";
import { FetchcaseComponent } from "../../pages/fetchcase/fetchcase.component";
import { InformationComponent } from "app/pages/information/information.component";

/* Imports */
export const ContentRoutes: Routes = [
  /* Routing Specification, place all "pages" that will be created here under the right alias and path */

  {
    path: "",
    redirectTo: "frontpage",
    pathMatch: "full"
  },
  { path: "frontpage", component: FrontpageComponent },
  { path: "summary", component: SummaryComponent },
  { path: "confirmation", component: ConfirmationComponent },
  { path: "edit", component: EditCaseComponent },
  { path: "fetchcase", component: FetchcaseComponent },
  { path: "information", component: InformationComponent }
];
