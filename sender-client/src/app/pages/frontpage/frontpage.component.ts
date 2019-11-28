/**
 * Frontpage Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

declare var curity: any;

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

    constructor() { }

    public assistant: any;
    private nextButton=false
    private clientId: string;
    private test = "Test";

    ngOnInit() {
      //this.clientId = "oidc-demo";
      this.clientId = "regionostergotland.se-2019-11-briva"
      this.assistant = curity.token.assistant(this.initCurityToken(this.clientId));
      console.log(this.assistant);
     };

    onNext() {
      console.log(this.assistant.getAuthHeader())
      console.log(this.assistant);
      this.assistant.revokeTokens();
      this.assistant.loginIfRequired().then( () => {
          //console.log("Token: ", this.assistant.getAuthHeader())
          this.testFunction()
        }).fail( (error) => {
          console.log("Error: ", error);
      })
    };

    testFunction() {
      console.log("YES")
      console.log("Token: ", this.assistant.getAuthHeader());
    };

    initCurityToken(clientId) {
      var settings = {
        clientId: clientId,
        autoPrepareJqueryAjaxForOrigins: ['^/.*$']
      };
      /*if (typeof curity == 'undefined') {
        throw new Error("Assisted token javascript was not found. Make sure the server is running and/or update URL " +
          "of #assisted-token-js-script script");
      }*/
      return settings
    };
}
