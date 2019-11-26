import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormFetchCaseComponent } from './card-form-fetch-case.component';
import { ReactiveFormsModule } from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";

describe('CardFormFetchCaseComponent', () => {
  let component: CardFormFetchCaseComponent;
  let fixture: ComponentFixture<CardFormFetchCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ CardFormFetchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormFetchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
