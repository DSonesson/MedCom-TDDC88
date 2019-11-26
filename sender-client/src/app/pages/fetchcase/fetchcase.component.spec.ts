import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchcaseComponent } from './fetchcase.component';
import {CardFormFetchCaseComponent} from "../../shared/cards/card-form-fetch-case/card-form-fetch-case.component";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";

describe('FetchcaseComponent', () => {
  let component: FetchcaseComponent;
  let fixture: ComponentFixture<FetchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [ FetchcaseComponent, CardFormFetchCaseComponent ]
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
