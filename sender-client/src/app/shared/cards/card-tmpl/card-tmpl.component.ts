import { Component, OnInit, Input } from '@angular/core';


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
