/**
 * Basic Page Template File
 * Used as a placeholder to illustrate how the project files are organized
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component } from '@angular/core';

/* Component metadata  */
@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'page.component.html'
})

/* Component Class Holder */
export class PageComponent {
    
    public saveButton1=false;
    ngOnInit() { };
    
     onSave($event){    
        this.saveButton1 = !$event;
        
         
        if (this.saveButton1) {
            console.log("Open the form", $event);
            
            
            
        }else{
            console.log("Save the form data", $event);  
        }
     }    
    
    
}
