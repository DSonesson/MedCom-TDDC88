/**
 * Module File for Header
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header.component';

/**
 * This is the header component
 * of the application.
 */
@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})

/* Module Class Holder */
export class HeaderModule {
     ngOnInit() { };
}
