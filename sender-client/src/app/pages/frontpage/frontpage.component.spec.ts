import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageComponent } from './frontpage.component';
import {CardFormComponent} from "../../shared/cards/card-form/card-form.component";
import {CardTableComponent} from "../../shared/cards/card-table/card-table.component";
import {CardImageComponent} from "../../shared/cards/card-image/card-image.component";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LightboxModule} from "ngx-lightbox";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FrontpageComponent', () => {
  let component: FrontpageComponent;
  let fixture: ComponentFixture<FrontpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, LightboxModule, FormsModule, HttpClientTestingModule],
      declarations: [ FrontpageComponent, CardFormComponent, CardTableComponent, CardImageComponent ]
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
