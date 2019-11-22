import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { CardDefaultComponent } from "../../shared/cards/card-default/card-default.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {LightboxModule} from "ngx-lightbox";

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, LightboxModule],
      declarations: [ SummaryComponent, CardDefaultComponent ]
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
