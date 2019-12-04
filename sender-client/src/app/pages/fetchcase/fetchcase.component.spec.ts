import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchcaseComponent } from './fetchcase.component';
import {CardFormFetchCaseComponent} from "../../shared/cards/card-form-fetch-case/card-form-fetch-case.component";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageHeaderComponent} from "../../shared/cards/page-header/page-header.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FetchcaseComponent', () => {
  let component: FetchcaseComponent;
  let fixture: ComponentFixture<FetchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ FetchcaseComponent, CardFormFetchCaseComponent, PageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
