import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPatientDataComponent } from './card-patient-data.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('CardPatientDataComponent', () => {
  let component: CardPatientDataComponent;
  let fixture: ComponentFixture<CardPatientDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ CardPatientDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
