import { Injectable } from '@angular/core';

declare var curity: any;

@Injectable({
  providedIn: 'root'
})
export class AuthAssistantService {

  private assistant: any;
  //private clientId = "oidc-demo"; //Demo clientId - only for testing
  private clientId = "regionostergotland.se-2019-11-briva"; //Our id - should be used for production

  constructor() {
    console.log("Creating asssitant")
    this.assistant = curity.token.assistant(this.initCurityToken(this.clientId));
  }

  getAssistant() {
    return this.assistant;
  }

  initCurityToken(clientId) {
    var settings = {
        clientId: clientId,
        autoPrepareJqueryAjaxForOrigins: ['^/.*$']
      };
    return settings;
  }

}
