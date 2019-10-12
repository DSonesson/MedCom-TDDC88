import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ImageshareService } from './imageshare.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageshareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
