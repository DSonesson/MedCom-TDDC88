import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

/**
 * This component lets the user choose method
 * of authentication
 */
@Component({
  selector: 'app-aut-method-popup',
  templateUrl: './aut-method-popup.component.html',
  styleUrls: ['./aut-method-popup.component.scss']
})
export class AutMethodPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
