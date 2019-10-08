import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'confirmation', component: ConfirmationComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents = [UploadComponent, ConfirmationComponent]