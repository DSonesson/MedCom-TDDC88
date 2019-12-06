import { Component, OnInit, Input } from '@angular/core';

/**
 * This component is used for page titles.
 */
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  /**
   * The page title 
   */
  @Input() pageHeader: string;
  constructor() { }

  ngOnInit() {
  }

}
