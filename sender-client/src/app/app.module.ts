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

/* Import modules */
import { FooterModule } from './layouts/footer/footer.module';
import { HeaderModule} from './layouts/header/header.module';


/* Import App Files */
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { ContentComponent } from './layouts/content/content.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

/* Meta Data for App File s */
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    HeaderModule,
    ToastrModule.forRoot(),
    FooterModule
  ],
  bootstrap: [AppComponent]
})

/* Module Class Holder */
export class AppModule { }
 