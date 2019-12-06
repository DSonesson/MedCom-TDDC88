/**
 * Module File for App
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */
/* Imports */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { LightboxModule } from 'ngx-lightbox';
import { MatIconModule } from "@angular/material/icon";

/* Import modules */
import { FooterModule } from './layouts/footer/footer.module';
import { HeaderModule} from './layouts/header/header.module';


/* Import App Files */
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { ContentComponent } from './layouts/content/content.component';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './shared/helper/auth-interceptor.service';
import { AuthAssistantService} from './shared/auth-assistant.service';


/* Meta Data for App File s */
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,

  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    MatIconModule,
    BrowserAnimationsModule,
    LightboxModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true, scrollPositionRestoration: 'enabled'
    }),
    HeaderModule,
    ToastrModule.forRoot(),
    FooterModule
  ],
  bootstrap: [AppComponent],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true } ]
})

/* Module Class Holder */
export class AppModule { }
