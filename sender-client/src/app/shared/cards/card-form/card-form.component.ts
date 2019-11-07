/**
 * Card Form
 * Card layout for a form
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';

import { CaseDataService } from '../../../shared/case-data.service';
import { User } from '../../../models/user';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})





/* Component Class Holder */
export class CardFormComponent implements OnInit {

    public user: User; 
    
    public card_content = `                    <div class="col-md-12 px-1">
                        
                        <div class="form-group editable card-form">
                            <label>Namn</label>
                            <p [hidden]="saveButton1">{{user.name}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Ditt namn" [(ngModel)]="user.name" value="{{user.name}}">
                            <label>Email</label>
                            <p [hidden]="saveButton1">{{user.email}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Email" [(ngModel)]="user.email" value="{{user.email}}">
                            <label>Telefon</label>
                            <p [hidden]="saveButton1">{{user.phone}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Telefon" [(ngModel)]="user.phone" value="{{user.phone}}">
                         
                        </div>

                    </div>`;

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




