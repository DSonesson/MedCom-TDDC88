/**
 * Component file for Header
 * This on is used in the layout, is called by content.
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../layouts/content/content.component';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { CaseDataService } from '../../shared/case-data.service';

/* Meta data for Header */
@Component({
    moduleId: module.id,
    selector: 'header-cmp',
    templateUrl: 'header.component.html'
})

/* Component Class For Header */
export class HeaderComponent implements OnInit{
    /* Declare variables */
    private listTitles: any[];
     public menuItems: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    public isCollapsed = true;
    private test;

    public  = true;
    @ViewChild("header-cmp", {static: false}) button;

    /**
     * Constructor to setup basic locaiton and element variables
     * @input
     * @output
     * @author Alexander Anserud <alean378@student.liu.se>
     */
    constructor(location:Location, private renderer : Renderer, private element : ElementRef, private router: Router, public dataService: CaseDataService)
    {
        this.location = location;
        this.nativeElement = element.nativeElement;



    }
    /**
     * Configure menu items based on routes and the menu icon
     * @version 1.0
     * @author Alexander Anserud <alean378@student.liu.se>
     */
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar : HTMLElement = this.element.nativeElement;
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
       });
    }
    /* Get title of the page, default is for the  */
    /**
     * Used in the header to help the user see which page they are on
     * @version 1.0
     * @author Alexander Anserud <alean378@student.liu.se>
     * @return The current title, default is Startsida
     */
    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Startsida';
      ;
    }

    /**
     * Functionality to open/close the navbar
     * @version 1.0
     * @author Alexander Anserud <alean378@student.liu.se>
     */

      collapse(){
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
          navbar.classList.remove('navbar-transparent');
          navbar.classList.add('bg-white');
        }else{
          navbar.classList.add('navbar-transparent');
          navbar.classList.remove('bg-white');
        }

      }

}
