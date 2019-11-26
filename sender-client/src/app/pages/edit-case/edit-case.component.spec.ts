import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaseComponent } from './edit-case.component';
import {CardPatientDataComponent} from "../../shared/cards/card-patient-data/card-patient-data.component";
import {CardTableComponent} from "../../shared/cards/card-table/card-table.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('EditCaseComponent', () => {
  let component: EditCaseComponent;
  let fixture: ComponentFixture<EditCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ EditCaseComponent, CardPatientDataComponent, CardTableComponent ],

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
