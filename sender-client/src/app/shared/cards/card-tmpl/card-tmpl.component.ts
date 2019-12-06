import { Component, OnInit, Input } from '@angular/core';

/** Only a template, not used in application */
@Component({
  selector: 'app-card-tmpl',
  templateUrl: './card-tmpl.component.html',
  styleUrls: ['./card-tmpl.component.scss']
})
export class CardTmplComponent implements OnInit {
    @Input()  card_title = "";
    @Input()  card_desc = "";
    @Input()  card_content = ``;
    @Input()  card_footer = ""; 
    
    constructor() { 
    
    }

    ngOnInit() {
    }

}
