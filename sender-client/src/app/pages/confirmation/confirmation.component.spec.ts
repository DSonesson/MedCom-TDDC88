import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationComponent } from './confirmation.component';
import {CardConfirmationComponent} from "../../shared/cards/card-confirmation/card-confirmation.component";
import {RouterTestingModule} from "@angular/router/testing";
import {PageHeaderComponent} from "../../shared/cards/page-header/page-header.component";

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ConfirmationComponent, CardConfirmationComponent, PageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
