import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaseComponent } from './edit-case.component';
import {CardTableComponent} from "../../shared/cards/card-table/card-table.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardCaseNumber} from "../../shared/cards/card-case-number/card-case-number.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {  MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('EditCaseComponent', () => {
  let component: EditCaseComponent;
  let fixture: ComponentFixture<EditCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
                MatDatepickerModule,
                MatFormFieldModule,
                MatNativeDateModule,
                MatInputModule,
                BrowserAnimationsModule],
      declarations: [ EditCaseComponent, CardTableComponent, CardCaseNumber ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
