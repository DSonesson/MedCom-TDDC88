import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { TestComponent } from './test/test.component'; // Add this


const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'test', component: TestComponent }           // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
