import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageComponent } from './frontpage.component';
import {CardFormComponent} from "../../shared/cards/card-form/card-form.component";
import {CardTableComponent} from "../../shared/cards/card-table/card-table.component";
import {CardImageComponent} from "../../shared/cards/card-image/card-image.component";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LightboxModule} from "ngx-lightbox";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {PageHeaderComponent} from "../../shared/cards/page-header/page-header.component";
import {CardFormFetchCaseComponent} from "../../shared/cards/card-form-fetch-case/card-form-fetch-case.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('FrontpageComponent', () => {
  let component: FrontpageComponent;
  let fixture: ComponentFixture<FrontpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
                ReactiveFormsModule,
                LightboxModule,
                FormsModule,
                HttpClientTestingModule,
                MatDatepickerModule,
                MatFormFieldModule,
                MatNativeDateModule,
                MatInputModule,
                BrowserAnimationsModule],
      declarations: [ FrontpageComponent, CardFormComponent, CardTableComponent, CardImageComponent, PageHeaderComponent, CardFormFetchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
