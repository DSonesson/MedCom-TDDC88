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
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'page.component.html'
})

/* Component Class Holder */
export class PageComponent {
    
    private user: User; 

    private saveButton1=false;

    constructor(public dataService: CaseDataService) { 
       
    this.user = this.dataService.getCase().user;
    }
    
    ngOnInit() { };
    
     onSave($event){    
        this.saveButton1 = !$event;
        this.dataService.getCase().user = this.user;
         
        if (this.saveButton1) {
            console.log("Open the form", $event);
            
            
            
        }else{
            console.log("Save the form data", $event);  
        }
     } 
      
    
    
}
