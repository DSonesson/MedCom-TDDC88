/**
 * Basic Page Template File
 * Used as a placeholder to illustrate how the project files are organized
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component } from '@angular/core';
import { CaseDataService } from '../../shared/case-data.service';
import { User } from '../../models/user';


/* Component metadata  */
@Component({
    selector: 'page',
    moduleId: module.id,
    templateUrl: 'page.component.html'
})

/* Component Class Holder */
export class PageComponent {


  constructor() { }


  ngOnInit() { };



}
