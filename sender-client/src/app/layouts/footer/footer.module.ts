/**
 * Module File for Footer
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';

/* Module metadata  */
@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ FooterComponent ],
    exports: [ FooterComponent ]
})

/* Module Class Holder */
export class FooterModule {
     ngOnInit() { };
}
