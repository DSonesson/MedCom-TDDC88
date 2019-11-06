/**
 * Card Form
 * Card layout for at form
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */


/* Imports */
import { Component } from '@angular/core';
import { CaseDataService } from '../../../shared/case-data.service';
import { User } from '../../../models/user';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})

import { FormsModule } from '@angular/forms';

[...]

@NgModule({
  imports: [
    FormsModule
  ],
})

/* Component Class Holder */
export class CardFormComponent implements OnInit {

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




