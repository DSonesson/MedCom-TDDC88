import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormComponent } from './card-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ CardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
