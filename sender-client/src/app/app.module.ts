/**
 * Module File for App
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */
/* Imports */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { LightboxModule } from 'ngx-lightbox';

/* Import modules */
import { FooterModule } from './layouts/footer/footer.module';
import { HeaderModule} from './layouts/header/header.module';


/* Import App Files */
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { ContentComponent } from './layouts/content/content.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { FilesizemessageComponent } from './filesizemessage/filesizemessage.component';
import { ModalfilesizemessageComponent } from './modalfilesizemessage/modalfilesizemessage.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/* Meta Data for App File s */
@NgModule({
  entryComponents: [
    ModalfilesizemessageComponent
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    ModalComponent,
    FilesizemessageComponent,
    ModalfilesizemessageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    LightboxModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    HeaderModule,
    ToastrModule.forRoot(),
    FooterModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})

/* Module Class Holder */
export class AppModule { }
 