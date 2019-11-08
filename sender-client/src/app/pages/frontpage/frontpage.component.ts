/**
 * Frontpage Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';

import { Routes } from '@angular/router';


@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
    
   
    constructor(private router: Routes) { }

    private nextButton=false
    
    ngOnInit() { };

    btnClick= function () {
      this.router.navigateByUrl('/summary');
    };

    /*
    onNext($event){    
      this.nextButton = !$event;
      this.router.navigateByUrl('/summary')
      
      if (this.nextButton) {
          console.log("Open the form", $event);
          
          
          
      }else{
          console.log("Save the form data", $event);  
      }
   } 
   */
    
   
}
