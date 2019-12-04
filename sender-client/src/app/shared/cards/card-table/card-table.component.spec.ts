import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableComponent } from './card-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CardTableComponent', () => {
  let component: CardTableComponent;
  let fixture: ComponentFixture<CardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
                FormsModule,
                MatDatepickerModule,
                MatFormFieldModule,
                MatNativeDateModule,
                MatInputModule,
                BrowserAnimationsModule],
      declarations: [ CardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
