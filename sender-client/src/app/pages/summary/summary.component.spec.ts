import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { CardDefaultComponent } from "../../shared/cards/card-default/card-default.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {LightboxModule} from "ngx-lightbox";
import {MatDialogModule} from "@angular/material/dialog";
import {CardFormComponent} from "../../shared/cards/card-form/card-form.component";
import {CardImageComponent} from "../../shared/cards/card-image/card-image.component";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {PageHeaderComponent} from "../../shared/cards/page-header/page-header.component";

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, LightboxModule, MatDialogModule, MatIconModule, ReactiveFormsModule],
      declarations: [ SummaryComponent, CardDefaultComponent, CardFormComponent, CardImageComponent, PageHeaderComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
